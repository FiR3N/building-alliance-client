import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import cls from "./OurWorksModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";
import MyTextArea from "../../../UI/MyTextArea/MyTextArea";
import { SubmitHandler, useForm } from "react-hook-form";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import { IWork, IWorksInfos } from "../../../../models/Entity/IWorks";
import { worksAPI } from "../../../../api/WorksAPI";
import IWorkForm from "../../../../models/Forms/IWorkForm";
import { IImages } from "../../../../models/Entity/IImages";

interface OurWorkModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  work?: IWork;
}

const OurWorkModal: FC<OurWorkModalProps> = ({ closeMethod, work }) => {
  const [name, setName] = useState<string>(work ? work.name : "");
  const [date, setDate] = useState<string>(work ? work.date : "");
  const [image, setImage] = useState<File>();
  const [info, setInfo] = useState<IWorksInfos[]>(work ? work.infos : []);
  const [imageInfo, setImageInfo] = useState<IImages[]>(
    work ? work.images : []
  );

  const [images, setImages] = useState<any[]>([]);

  const [putWork, { error: putError }] = worksAPI.usePutWorkMutation();
  const [createWork, { error: createError }] = worksAPI.usePostWorkMutation();

  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<IWorkForm>({ mode: "onChange" });

  const addInfo = () => {
    setInfo([
      ...info,
      {
        description: "",
        workId: work ? work.id : Math.random(),
        id: info.length + 1,
      },
    ]);
  };

  const removeInfo = (id: number) => {
    setInfo(info.filter((item) => item.id !== id));
  };

  const changeInfo = (description: string, id: number) => {
    setInfo(
      info.map((item) =>
        item.id === id ? { ...item, description: description } : item
      )
    );
  };

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

  const onSubmit: SubmitHandler<IWorkForm> = async (data) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("date", date);
    image && formData.append("image", image as File);
    formData.append("info", JSON.stringify(info));
    if (work) {
      formData.append("imageInfo", JSON.stringify(imageInfo));
    }
    images.forEach((image, index) => {
      formData.append(`imageList[${index}]`, image.image);
    });

    if (work) {
      await putWork({ id: work.id, formData: formData }).unwrap();
    } else {
      await createWork({ formData: formData }).unwrap();
    }
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful, createError, putError]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.ourWorksModal}>
        {work ? (
          <h2 className={cls.ourWorksModalTitle}>Редактирование</h2>
        ) : (
          <h2 className={cls.ourWorksModalTitle}>Создание</h2>
        )}

        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            {work
              ? `Объект ${work?.id} успешно отредактирован`
              : `Объект успешно создан`}
          </InfoBlock>
        )}
        {putError && (
          <InfoBlock blockType={-1}>Ошибка редактирования!</InfoBlock>
        )}
        {createError && <InfoBlock blockType={-1}>Ошибка создания!</InfoBlock>}
        <form
          className={cls.ourWorksModalForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <MyInput
            labelTitle="Название"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Введите название..."
            register={register("name", {
              required: "Имя не может быть пустым!",
            })}
            error={errors.name}
          />
          <MyInput
            labelTitle="Дата"
            value={date}
            onChange={(e) => setDate(e.currentTarget.value)}
            type="date"
            placeholder="Введите дату..."
            register={register("date", {
              required: "Дата не может быть пустым!",
            })}
            error={errors.date}
          />
          {work && (
            <div className={cls.ourWorksModalFormImageBlock}>
              <label>Текущее изображение</label>
              <img
                src={
                  import.meta.env.VITE_API_URL + "/images/works/" + work?.image
                }
                alt="work-img"
                className={cls.ourWorksModalFormImage}
              />
            </div>
          )}
          {image && (
            <div className={cls.ourWorksModalFormImageBlock}>
              <label>Новое изображение</label>
              <img
                src={URL.createObjectURL(image)}
                alt="work_new_img"
                className={cls.ourWorksModalFormImage}
              />
            </div>
          )}
          <MyInput labelTitle="Изображение" onChange={selectFile} type="file" />
          <div className={cls.ourWorksModalFormInfos}>
            {info.map((item, index) => (
              <div className={cls.ourWorksModalFormInfo} key={item.id}>
                <MyTextArea
                  labelTitle={`Контент - ${index + 1}`}
                  rows={10}
                  value={item.description}
                  onChange={(e) => changeInfo(e.target.value, item.id)}
                />
                <MyButton type="button" onClick={(e) => removeInfo(item.id)}>
                  Удалить
                </MyButton>
              </div>
            ))}
            <MyButton type="button" onClick={addInfo}>
              Добавить информацию
            </MyButton>
          </div>

          {work && (
            <div className={cls.ourWorksModalFormImages}>
              {imageInfo.map((item, index) => (
                <div className={cls.ourWorksModalFormImageItem} key={item.id}>
                  <label>Изображение {index + 1}</label>
                  <img
                    src={
                      import.meta.env.VITE_API_URL +
                      "/images/works/" +
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
          <div className={cls.ourWorksModalFormImages}>
            {images.map((item, index) => (
              <div className={cls.ourWorksModalFormImageItem} key={item.id}>
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

export default OurWorkModal;
