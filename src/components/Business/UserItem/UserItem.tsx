import { FC, useState, useEffect } from "react";
import cls from "./UserItem.module.scss";
import { IUser } from "../../../models/Entity/IUser";

import editImage from "../../../assets/img/edit.svg";
import deleteImage from "../../../assets/img/delete.svg";
import { IRole } from "../../../models/Entity/IRole";
import { UserService } from "../../../api/UserService";
import UserDeleteModal from "../Modals/UserDeleteModal/UserDeleteModal";
import UserModal from "../Modals/UserModal/UserModal";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  const [isUserChangeModalOpen, setIsUserChangeModalOpen] =
    useState<boolean>(false);
  const [isUserDeleteModalOpen, setIsUserDeleteModalOpen] =
    useState<boolean>(false);

  return (
    <>
      {isUserChangeModalOpen && (
        <UserModal closeMethod={setIsUserChangeModalOpen} user={user} />
      )}
      {isUserDeleteModalOpen && (
        <UserDeleteModal closeMethod={setIsUserDeleteModalOpen} user={user} />
      )}

      <div className={cls.userItem}>
        <div className={cls.userItemAdminPanel}>
          <img
            src={editImage}
            alt="изменить"
            onClick={() => setIsUserChangeModalOpen(true)}
          />
          <img
            src={deleteImage}
            alt="удалить"
            onClick={() => setIsUserDeleteModalOpen(true)}
          />
        </div>
        <div className={cls.userItemContent}>
          <img
            src={import.meta.env.VITE_API_URL + "/images/users/" + user.image}
            alt="user"
            className={cls.userItemImage}
          />
          <div className={cls.userItemInfo}>
            <p className="bold-title-text">
              ФИО:{" "}
              <span className="default-text">
                {user.surname} {user.name} {user.patronymic}
              </span>
            </p>
            <p className="bold-title-text">
              Роль:{" "}
              <span className="default-text">
                {(user.roleId === 1 && "Админ") ||
                  (user.roleId === 2 && "Информационный редактор") ||
                  (user.roleId === 3 && "Экономист")}
              </span>
            </p>
            <p className="bold-title-text">
              Логин: <span className="default-text">{user.login}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
