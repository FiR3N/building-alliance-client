import { FC, useState } from "react";
import UserModal from "../Modals/UserModal/UserModal";
import MyButton from "../../UI/MyButton/MyButton";
import UserList from "../UserList/UserList";

const AdminUserPage: FC = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  return (
    <>
      {isUserModalOpen && <UserModal closeMethod={setIsUserModalOpen} />}
      <div>
        <MyButton onClick={() => setIsUserModalOpen(true)}>
          Добавить пользователя
        </MyButton>
        <UserList />
      </div>
    </>
  );
};

export default AdminUserPage;
