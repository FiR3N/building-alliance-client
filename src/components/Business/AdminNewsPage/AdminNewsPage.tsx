import { FC, useState } from "react";
import cls from "./AdminNewsPage.module.scss";
import NewsList from "../NewsList/NewsList";
import MyButton from "../../UI/MyButton/MyButton";
import NewsModal from "../Modals/NewsModal/NewsModal";

const AdminNewsPage: FC = () => {
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  return (
    <>
      {isNewsModalOpen && (
        <NewsModal closeMethod={setIsNewsModalOpen} state={isNewsModalOpen} />
      )}
      <div className={cls.adminNewsPage}>
        <MyButton onClick={() => setIsNewsModalOpen(true)}>
          Добавить новость
        </MyButton>
        <NewsList isFull isAdmin />
      </div>
    </>
  );
};

export default AdminNewsPage;
