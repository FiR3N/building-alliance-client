import { FC, useState } from "react";
import cls from "../AdminSettings.module.scss";
import classNames from "classnames";
import MyInput from "../../../components/UI/MyInput/MyInput";
import MyButton from "../../../components/UI/MyButton/MyButton";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { SubmitHandler, useForm } from "react-hook-form";
import IAdminUserForm from "../../../models/Forms/IAdminUserForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { updateUser } from "../../../store/actionCreators/userActions";
import InfoBlock from "../../../components/Blocks/InfoBlock/InfoBlock";

const AdminSettingsContent: FC = () => {
  const { user, error } = useTypeSelector((state) => state.userReducer);
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState<string>(user?.name);
  const [surname, setSurname] = useState<string>(user?.surname);
  const [patronymic, setPatronymic] = useState<string>(user?.patronymic);
  const [login, setLogin] = useState<string>(user?.login);
  const [image, setImage] = useState<File>();

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    setImage(e.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IAdminUserForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IAdminUserForm> = async (data) => {
    dispatch(
      updateUser({
        id: user.id,
        name: data.name,
        surname: data.surname,
        patronymic: data.patronymic,
        image: image as File,
        login: data.login,
      })
    );
  };

  return (
    <div className={cls.adminSettings}>
      <div className={classNames(cls.adminSettingsContent, "container")}>
        <h2>Данные профиля</h2>
        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>Пользователь успешно обновлен!</InfoBlock>
        )}
        {error && (
          <p className={classNames(cls.adminSettingsError, "error-text")}>
            {error}
          </p>
        )}
        <form
          className={cls.adminSettingsForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <MyInput
            labelTitle="Имя"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            register={register("name", {
              required: "Имя не может быть пустым!",
            })}
            error={errors.name}
            placeholder="Введите имя..."
            type="text"
          />
          <MyInput
            labelTitle="Фамилия"
            value={surname}
            onChange={(e) => setSurname(e.currentTarget.value)}
            register={register("surname", {
              required: "Фамилия не может быть пустым!",
            })}
            error={errors.surname}
            placeholder="Введите фамилию..."
            type="text"
          />
          <MyInput
            labelTitle="Отчество"
            value={patronymic}
            onChange={(e) => setPatronymic(e.currentTarget.value)}
            register={register("patronymic", {
              required: "Отчество не может быть пустым!",
            })}
            error={errors.patronymic}
            placeholder="Введите отчество..."
            type="text"
          />
          <img
            src={import.meta.env.VITE_API_URL + "/images/users/" + user.image}
            alt={"Аватар"}
            className={cls.adminSettingsAvatar}
          />
          <MyInput
            labelTitle="Аватар"
            onChange={selectFile}
            error={errors.image}
            type="file"
          />

          <MyInput
            labelTitle="Логин"
            value={login}
            onChange={(e) => setLogin(e.currentTarget.value)}
            register={register("login", {
              required: "Логин не может быть пустым!",
            })}
            error={errors.login}
            placeholder="Введите логин..."
            type="text"
          />
          <MyButton>Сохранить</MyButton>
        </form>
      </div>
    </div>
  );
};

export default AdminSettingsContent;
