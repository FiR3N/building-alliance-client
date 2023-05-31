import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import cls from "./ServiceModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";
import MyTextArea from "../../../UI/MyTextArea/MyTextArea";
import { SubmitHandler, useForm } from "react-hook-form";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import { IService, IServiceInfos } from "../../../../models/Entity/IService";
import { servicesAPI } from "../../../../api/ServicesAPI";
import IServiceForm from "../../../../models/Forms/IServiceForm";

interface ServiceModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  service?: IService;
}

const ServiceModal: FC<ServiceModalProps> = ({ closeMethod, service }) => {
  const [name, setName] = useState<string>(service ? service.name : "");
  const [image, setImage] = useState<File>();
  const [info, setInfo] = useState<IServiceInfos[]>(
    service ? service.infos : []
  );
  const [putService, { error: putError }] = servicesAPI.usePutServiceMutation();
  const [createService, { error: createError }] =
    servicesAPI.usePostServiceMutation();

  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<IServiceForm>({ mode: "onChange" });

  const addInfo = () => {
    setInfo([
      ...info,
      {
        description: "",
        serviceId: service ? service.id : Math.random(),
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

  const onSubmit: SubmitHandler<IServiceForm> = async (data) => {
    const formData = new FormData();
    formData.append("name", name);
    image && formData.append("image", image as File);
    formData.append("info", JSON.stringify(info));

    if (service) {
      await putService({ id: service.id, formData: formData }).unwrap();
    } else {
      await createService({ formData: formData }).unwrap();
    }
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.serviceModal}>
        {service ? (
          <h2 className={cls.serviceModalTitle}>Редактирование</h2>
        ) : (
          <h2 className={cls.serviceModalTitle}>Создание</h2>
        )}

        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            {service
              ? `Услуга ${service?.id} успешно отредактирована`
              : `Услуга успешно создана`}
          </InfoBlock>
        )}
        {putError && (
          <InfoBlock blockType={-1}>Ошибка редактирования!</InfoBlock>
        )}
        {createError && <InfoBlock blockType={-1}>Ошибка создания!</InfoBlock>}
        <form
          className={cls.serviceModalForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <MyInput
            labelTitle="Название"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Введите название..."
            required
            maxLength={255}
            register={register("name", {
              required: "Имя не может быть пустым!",
            })}
            error={errors.name}
          />

          {service && (
            <div className={cls.serviceModalFormImageBlock}>
              <label>Текущее изображение</label>
              <img
                src={
                  import.meta.env.VITE_API_URL +
                  "/images/services/" +
                  service?.image
                }
                alt="news_img"
                className={cls.serviceModalFormImage}
              />
            </div>
          )}
          {image && (
            <div className={cls.serviceModalFormImageBlock}>
              <label>Новое изображение</label>
              <img
                src={URL.createObjectURL(image)}
                alt="service_new_img"
                className={cls.serviceModalFormImage}
              />
            </div>
          )}
          <MyInput labelTitle="Изображение" onChange={selectFile} type="file" />
          <div className={cls.serviceModalFormInfos}>
            {info.map((item, index) => (
              <div className={cls.serviceModalFormInfo} key={item.id}>
                <MyTextArea
                  labelTitle={`Контент - ${index + 1}`}
                  rows={10}
                  value={item.description}
                  required
                  onChange={(e) => changeInfo(e.target.value, item.id)}
                />
                <MyButton onClick={(e) => removeInfo(item.id)}>
                  Удалить
                </MyButton>
              </div>
            ))}
            <MyButton type="button" onClick={addInfo}>
              Добавить информацию
            </MyButton>
          </div>
          <MyButton disabled={isSubmitting} type="submit">
            Сохранить
          </MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default ServiceModal;
