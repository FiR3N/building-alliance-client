import { FC, SetStateAction, Dispatch, useState, useEffect } from "react";
import cls from "./CertificateModal.module.scss";
import {
  ICertificate,
  ICertificateImages,
} from "../../../../models/Entity/ICertificate";
import { certificateAPI } from "../../../../api/CertificateAPI";
import { SubmitHandler, useForm } from "react-hook-form";
import ICertificateForm from "../../../../models/Forms/ICertificateForm";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import Modal from "../../../UI/Modal/Modal";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";

interface CertificateModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  certificate?: ICertificate;
}

const CertificateModal: FC<CertificateModalProps> = ({
  closeMethod,
  certificate,
}) => {
  const [description, setDescription] = useState<string>(
    certificate ? certificate.description : ""
  );
  const [image, setImage] = useState<File>();
  const [imageInfo, setImageInfo] = useState<ICertificateImages[]>(
    certificate ? certificate.images : []
  );

  const [images, setImages] = useState<any[]>([]);
  const [putCertificate, { error: putError }] =
    certificateAPI.usePutCertificateMutation();
  const [createCertificate, { error: createError }] =
    certificateAPI.usePostCertificateMutation();

  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<ICertificateForm>({ mode: "onChange" });

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    setImage(e.target.files[0]);
  };

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    setImages([
      ...images,
      {
        image: e.target.files[0] as File,
      },
    ]);
  };

  const removeImage = (image: File) => {
    setImages(images.filter((item) => item.image !== image));
  };

  const removeImageInfo = (id: number) => {
    setImageInfo(imageInfo.filter((item) => item.id !== id));
  };

  const onSubmit: SubmitHandler<ICertificateForm> = async (data) => {
    const formData = new FormData();
    formData.append("description", description);
    image && formData.append("image", image as File);
    if (certificate) {
      formData.append("imageInfo", JSON.stringify(imageInfo));
    }
    images.forEach((image, index) => {
      formData.append(`imageList[${index}]`, image.image);
    });

    if (certificate) {
      await putCertificate({ id: certificate.id, formData: formData }).unwrap();
    } else {
      await createCertificate({ formData: formData }).unwrap();
    }
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.certificateModal}>
        {certificate ? (
          <h2 className={cls.certificateModalTitle}>Редактирование</h2>
        ) : (
          <h2 className={cls.certificateModalTitle}>Создание</h2>
        )}

        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            {certificate
              ? `Сертификат ${certificate?.id} успешно отредактирован`
              : `Сертификат успешно создан`}
          </InfoBlock>
        )}
        {putError && (
          <InfoBlock blockType={-1}>Ошибка редактирования!</InfoBlock>
        )}
        {createError && <InfoBlock blockType={-1}>Ошибка создания!</InfoBlock>}
        <form
          className={cls.certificateModalForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <MyInput
            labelTitle="Описание"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            placeholder="Введите описание..."
            required
            maxLength={100}
            register={register("description", {
              required: "Описание не может быть пустым!",
            })}
            error={errors.description}
          />

          {certificate && (
            <div className={cls.certificateModalFormImageBlock}>
              <label>Текущее изображение</label>
              <img
                src={
                  import.meta.env.VITE_API_URL +
                  "/images/certificates/" +
                  certificate?.image
                }
                alt="certificate_img"
                className={cls.certificateModalFormImage}
              />
            </div>
          )}
          {image && (
            <div className={cls.certificateModalFormImageBlock}>
              <label>Новое изображение</label>
              <img
                src={URL.createObjectURL(image)}
                alt="certificate_new_img"
                className={cls.certificateModalFormImage}
              />
            </div>
          )}
          <MyInput labelTitle="Изображение" onChange={selectFile} type="file" />

          {certificate && (
            <div className={cls.certificateModalFormImages}>
              {imageInfo.map((item, index) => (
                <div
                  className={cls.certificateModalFormImageItem}
                  key={item.id}
                >
                  <label>Изображение {index + 1}</label>
                  <img
                    src={
                      import.meta.env.VITE_API_URL +
                      "/images/certificates/" +
                      item.image
                    }
                  />
                  <MyButton
                    type="button"
                    onClick={(e) => removeImageInfo(item.id)}
                  >
                    Удалить
                  </MyButton>
                </div>
              ))}
            </div>
          )}
          {images.length > 0 && <label>Добавленные изображения</label>}
          <div className={cls.certificateModalFormImages}>
            {images.map((item, index) => (
              <div className={cls.certificateModalFormImageItem} key={item.id}>
                <label>Иизображение {index + 1}</label>
                <img src={URL.createObjectURL(item.image)} />
                <MyButton type="button" onClick={(e) => removeImage(item)}>
                  Удалить
                </MyButton>
              </div>
            ))}
          </div>
          <MyInput
            labelTitle="Добавить дополнительное изображение"
            onChange={addImage}
            type="file"
          />

          <MyButton disabled={isSubmitting} type="submit">
            Сохранить
          </MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default CertificateModal;
