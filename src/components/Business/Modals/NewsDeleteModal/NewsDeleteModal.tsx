import { Dispatch, FC, SetStateAction, useEffect } from "react";
import cls from "./NewsDeleteModal.module.scss";
import Modal from "../../../UI/Modal/Modal";
import MyButton from "../../../UI/MyButton/MyButton";
import { INews } from "../../../../models/Entity/INews";
import { newsAPI } from "../../../../api/NewsAPI";
import classNames from "classnames";

interface NewsDeleteModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  news: INews;
}

const NewsDeleteModal: FC<NewsDeleteModalProps> = ({ closeMethod, news }) => {
  const [deleteNews, { isSuccess, isError }] = newsAPI.useDeleteNewsMutation();

  const deleteNewsHandler = async () => {
    await deleteNews({ id: news.id });
  };

  useEffect(() => {
    if (isSuccess) {
      closeMethod(false);
    }
  }, [isSuccess]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.newsDeleteModal}>
        <h2 className={cls.newsDeleteModalTitle}>
          Вы точно уверенны, что хотите удалить данную новость?
        </h2>
        {isError && (
          <p className={classNames(cls.newsDeleteError, "error-text")}>
            Ошибка при удалении!
          </p>
        )}
        <p className="default-text">
          <span className="bold-text">Номер новости:</span> {news.id}
        </p>
        <p className="default-text">
          <span className="bold-text">Название новости:</span> {news.name}
        </p>
        <img
          src={import.meta.env.VITE_API_URL + "/images/news/" + news.img}
          alt={`news-${news.id}`}
        />
        <MyButton onClick={deleteNewsHandler}>Да</MyButton>
      </div>
    </Modal>
  );
};

export default NewsDeleteModal;
