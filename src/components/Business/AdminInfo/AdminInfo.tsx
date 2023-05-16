import { FC, useEffect, useState } from "react";
import cls from "./AdminInfo.module.scss";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import MyButton from "../../UI/MyButton/MyButton";
import { IRole } from "../../../models/Entity/IRole";
import { logout } from "../../../store/actionCreators/userActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { Link } from "react-router-dom";
import { UserService } from "../../../api/UserService";
import classNames from "classnames";

const AdminInfo: FC = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const [role, setRole] = useState<IRole>({} as IRole);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    UserService.getRoleById(user.roleId).then((response) =>
      setRole(response.data)
    );
  }, [user]);

  return (
    <div className={classNames(cls.adminInfo, "container")}>
      <div className={cls.adminInfoContent}>
        <div className={cls.adminInfoUser}>
          <img
            src={import.meta.env.VITE_API_URL + "/images/users/" + user.image}
            alt="avat"
            className={cls.adminInfoUserImage}
          />
          <div className={cls.adminInfoUserText}>
            <p className="bold-title-text">
              ФИО:{" "}
              <span className="default-text">
                {user.surname} {user.name} {user.patronymic}
              </span>
            </p>
            <p className="bold-title-text">
              Логин: <span className="default-text">{user.login}</span>
            </p>
            <p className="bold-title-text">
              Роль: <span className="default-text">{role.name}</span>
            </p>
          </div>
        </div>
        <div className={cls.adminInfoButtons}>
          <Link to={"/"}>
            <MyButton onClick={() => dispatch(logout())}>Выйти</MyButton>
          </Link>
          <Link to={"settings"}>
            <MyButton>Изменить</MyButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminInfo;
