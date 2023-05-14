import { FC, Dispatch, SetStateAction, useEffect } from "react";
import cls from "./UserDeleteModal.module.scss";
import { IUser } from "../../../../models/Entity/IUser";
import { userAPI } from "../../../../api/UserService";
import Modal from "../../../UI/Modal/Modal";
import MyButton from "../../../UI/MyButton/MyButton";
import classNames from "classnames";

interface UserDeleteModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  user: IUser;
}

const UserDeleteModal: FC<UserDeleteModalProps> = ({ user, closeMethod }) => {
  const [deleteUser, { isSuccess, isError }] = userAPI.useDeleteUserMutation();

  const deleteUserHandler = async () => {
    await deleteUser({ id: user.id });
  };

  useEffect(() => {
    if (isSuccess) {
      closeMethod(false);
    }
  }, [isSuccess]);
  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.userDeleteModal}>
        <h2 className={cls.userDeleteModalTitle}>
          Вы точно уверенны, что хотите удалить данного пользователя?
        </h2>
        {isError && (
          <p className={classNames(cls.userDeleteModalError, "error-text")}>
            Ошибка при удалении!
          </p>
        )}
        <p className="default-text">
          <span className="bold-text">Номер пользователя:</span> {user.id}
        </p>
        <p className="default-text">
          <span className="bold-text">ФИО пользователя:</span> {user.surname}{" "}
          {user.name} {user.patronymic}
        </p>
        <p className="default-text">
          <span className="bold-text">Роль пользователя:</span>{" "}
          {user.roleId == 1 ? "Админ" : "Редактор"}
        </p>
        <img
          src={import.meta.env.VITE_API_URL + "/images/users/" + user.image}
        />
        <MyButton onClick={deleteUserHandler}>Да</MyButton>
      </div>
    </Modal>
  );
};

export default UserDeleteModal;
