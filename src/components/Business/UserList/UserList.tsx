import { FC, useState } from "react";
import cls from "./UserList.module.scss";
import classNames from "classnames";
import { userAPI } from "../../../api/UserService";
import sadSmile from "../../../assets/img/sad-smile.png";
import Loader from "../../UI/Loader/Loader";
import UserItem from "../UserItem/UserItem";

const UserList: FC = () => {
  const { data: usersList, error } = userAPI.useGetUsersQuery({});

  if (error) {
    return (
      <div className={classNames(cls.userList, "container")}>
        <h2 className="error-block">
          Ошибка получения пользователей
          <img className="smile-image" src={sadSmile} alt="sad-smile" />
        </h2>
      </div>
    );
  }

  return (
    <div className={classNames(cls.userList, "container")}>
      {usersList ? (
        usersList.length > 0 ? (
          <>
            <div className={cls.userListContent}>
              {usersList.map((user) => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          </>
        ) : (
          <h2 className={cls.userListError}>
            Пользователей не найдено
            <img className="smile-image" src={sadSmile} alt="sad-smile" />
          </h2>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserList;
