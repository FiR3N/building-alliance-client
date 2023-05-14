import { FC, useState } from "react";
import NewsList from "../NewsList/NewsList";
import MyButton from "../../UI/MyButton/MyButton";
import NewsModal from "../Modals/NewsModal/NewsModal";

const AdminNewsPage: FC = () => {
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  return (
    <>
      {isNewsModalOpen && <NewsModal closeMethod={setIsNewsModalOpen} />}
      <div>
        <MyButton onClick={() => setIsNewsModalOpen(true)}>
          Добавить новость
        </MyButton>
        <NewsList isFull isAdmin />
      </div>
    </>
  );
};

export default AdminNewsPage;
