import { FC } from "react";
import cls from "./UserList.module.scss";
import classNames from "classnames";

const UserList: FC = () => {
  return <div className={classNames(cls.userList, "container")}></div>;
};

export default UserList;
