import { FC, useState } from "react";
import cls from "./AdminLogin.module.scss";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
import { SubmitHandler, useForm } from "react-hook-form";
import IAdminLoginForm from "../../models/Forms/IAdminLoginForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

import { useTypeSelector } from "../../hooks/useTypeSelector";
import { login } from "../../store/actionCreators/userActions";

const AdminLogin: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useTypeSelector((state) => state.userReducer);

  const [isPasswordShowable, setIsPasswordShowable] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<IAdminLoginForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IAdminLoginForm> = async (data) => {
    dispatch(login({ login: data.login, password: data.password }));
    reset({
      login: "",
      password: "",
    });
  };

  return (
    <PageLayout title="Админ панель" pathname={pathname}>
      <div className={cls.adminLogin}>
        <div className={classNames(cls.adminLoginContent, "container")}>
          <h2 className={cls.adminLoginTitle}>Авторизация</h2>
          {error && (
            <p className={classNames(cls.adminLoginError, "error-text")}>
              {error}
            </p>
          )}
          <form
            className={cls.adminLoginForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <MyInput
              placeholder="Введите логин"
              type="text"
              register={register("login", {
                required: "Логин не может быть пустым!",
              })}
              error={errors.login}
            />
            <MyInput
              placeholder="Введите пароль"
              type={isPasswordShowable ? "text" : "password"}
              register={register("password", {
                required: "Пароль не может быть пустым!",
              })}
              error={errors.password}
            />
            <div className={cls.adminLoginFormCheckBox}>
              <MyInput
                labelTitle="Показывать пароль"
                type="checkbox"
                onChange={(e) => setIsPasswordShowable((prev) => !prev)}
                className={cls.passwordShowable}
              />
            </div>

            <MyButton disabled={isSubmitting || isSubmitSuccessful}>
              Войти
            </MyButton>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminLogin;
