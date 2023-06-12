import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import cls from "./NewsModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import { INews } from "../../../../models/Entity/INews";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";
import MyTextArea from "../../../UI/MyTextArea/MyTextArea";
import { IInfos } from "../../../../models/Entity/IInfos";
import { SubmitHandler, useForm } from "react-hook-form";
import INewsForm from "../../../../models/Forms/INewsForm";
import { newsAPI } from "../../../../api/NewsAPI";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";
import classNames from "classnames";

interface NewsModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  news?: INews;
}

const NewsModal: FC<NewsModalProps> = ({ closeMethod, news }) => {
  const [name, setName] = useState<string>(news ? news.name : "");
  const [date, setDate] = useState<string>(news ? news.date : "");
  const [description, setDescription] = useState<string>(
    news ? news.description : ""
  );
  const [image, setImage] = useState<File | null>();
  const [info, setInfo] = useState<IInfos[]>(news ? news.infos : []);
  const [putNews, { error: putError }] = newsAPI.usePutNewsMutation();
  const [createNews, { error: createError }] = newsAPI.usePostNewsMutation();

  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<INewsForm>({ mode: "onChange" });

  const addInfo = () => {
    setInfo([
      ...info,
      {
        description: "",
        newsId: news ? news.id : Math.random(),
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

  const onSubmit: SubmitHandler<INewsForm> = async (data) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("date", date);
    image && formData.append("image", image as File);
    formData.append("info", JSON.stringify(info));

    if (news) {
      await putNews({ id: news.id, formData: formData }).unwrap();
    } else {
      await createNews({ formData: formData }).unwrap();
    }

    setImage(null);
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful, createError, putError]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.newsModal}>
        {news ? (
          <h2 className={cls.newsModalTitle}>Редактирование</h2>
        ) : (
          <h2 className={cls.newsModalTitle}>Создание</h2>
        )}

        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            {news
              ? `Новость ${news?.id} успешно отредактирована`
              : `Новость успешно создана`}
          </InfoBlock>
        )}
        {putError && (
          <InfoBlock blockType={-1}>Ошибка редактирования!</InfoBlock>
        )}
        {createError && <InfoBlock blockType={-1}>Ошибка создания!</InfoBlock>}
        <form className={cls.newsModalForm} onSubmit={handleSubmit(onSubmit)}>
          <MyInput
            labelTitle="Название"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Введите название..."
            required
            maxLength={150}
            register={register("name", {
              required: "Имя не может быть пустым!",
            })}
            error={errors.name}
          />
          <MyInput
            labelTitle="Описание"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            required
            maxLength={255}
            placeholder="Введите описание..."
            register={register("description", {
              required: "Описание не может быть пустым!",
            })}
            error={errors.description}
          />
          <MyInput
            labelTitle="Дата"
            value={date}
            onChange={(e) => setDate(e.currentTarget.value)}
            type="date"
            placeholder="Введите дату..."
            required
            register={register("date", {
              required: "Дата не может быть пустым!",
            })}
            error={errors.date}
          />
          {news && (
            <div className={cls.newsModalFormImageBlock}>
              <label>Текущее изображение</label>
              <img
                src={import.meta.env.VITE_API_URL + "/images/news/" + news?.img}
                alt="news_img"
                className={cls.newsModalFormImage}
              />
            </div>
          )}
          {image && (
            <div className={cls.newsModalFormImageBlock}>
              <label>Новое изображение</label>
              <img
                src={URL.createObjectURL(image)}
                alt="news_new_img"
                className={cls.newsModalFormImage}
              />
            </div>
          )}
          <MyInput labelTitle="Изображение" onChange={selectFile} type="file" />

          <div className={cls.newsModalFormInfos}>
            {info.map((item, index) => (
              <div className={cls.newsModalFormInfo} key={item.id}>
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

export default NewsModal;
