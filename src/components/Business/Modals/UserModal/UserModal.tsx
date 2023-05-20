import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
import cls from "./UserModal.module.scss";
import { IUser } from "../../../../models/Entity/IUser";
import { userAPI } from "../../../../api/UserService";
import { SubmitHandler, useForm } from "react-hook-form";
import IUserForm from "../../../../models/Forms/IUserForm";
import Modal from "../../../UI/Modal/Modal";
import MyButton from "../../../UI/MyButton/MyButton";
import MyInput from "../../../UI/MyInput/MyInput";
import InfoBlock from "../../../Blocks/InfoBlock/InfoBlock";

interface UserModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  user?: IUser;
}

const UserModal: FC<UserModalProps> = ({ closeMethod, user }) => {
  const [name, setName] = useState<string>(user ? user.name : "");
  const [surname, setSurname] = useState<string>(user ? user.surname : "");
  const [patronymic, setPatronymic] = useState<string>(
    user ? user.patronymic : ""
  );
  const [login, setLogin] = useState<string>(user ? user.login : "");
  const [password, setPassword] = useState<string>("");
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [roleId, setRoleId] = useState<number>(user ? user.roleId : 2);
  const [image, setImage] = useState<File>();

  const [putUser, { error: putError }] = userAPI.usePutUserMutation();
  const [createUser, { error: createError }] = userAPI.usePostUserMutation();

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<IUserForm>({ mode: "onChange" });

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    setImage(e.target.files[0]);
  };

  const onSubmit: SubmitHandler<IUserForm> = async (data) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("patronymic", patronymic);
    formData.append("login", login);
    formData.append("password", password);
    formData.append("roleId", String(roleId));
    image && formData.append("image", image as File);

    if (user) {
      await putUser({ id: user.id, formData: formData }).unwrap();
    } else {
      await createUser({ formData: formData }).unwrap();
    }
  };

  useEffect(() => {
    const modalRoot = document.querySelector("#modal-root");
    const firstDiv = modalRoot?.querySelector("div");
    firstDiv?.scrollTo({ top: 0 });
  }, [isSubmitSuccessful, putError, createError]);

  return (
    <Modal closeMethod={closeMethod}>
      <div className={cls.userModal}>
        {user ? (
          <h2 className={cls.userModalTitle}>Редактирование</h2>
        ) : (
          <h2 className={cls.userModalTitle}>Создание</h2>
        )}

        {isSubmitSuccessful && (
          <InfoBlock blockType={1}>
            {user
              ? `Пользователь ${user?.id} успешно отредактирован`
              : `Пользователь успешно создан`}
          </InfoBlock>
        )}
        {putError && (
          <InfoBlock blockType={-1}>
            Ошибка редактирования! (Возможно пользователь с таким логином уже
            существует!)
          </InfoBlock>
        )}
        {createError && <InfoBlock blockType={-1}>Ошибка создания!</InfoBlock>}
        <form className={cls.userModalForm} onSubmit={handleSubmit(onSubmit)}>
          <MyInput
            labelTitle="Имя"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Введите имя..."
            register={register("name", {
              required: "Имя не может быть пустым!",
            })}
            error={errors.name}
          />

          <MyInput
            labelTitle="Фамилия"
            value={surname}
            onChange={(e) => setSurname(e.currentTarget.value)}
            placeholder="Введите фамилию..."
            register={register("surname", {
              required: "Фамилия не может быть пустым!",
            })}
            error={errors.surname}
          />

          <MyInput
            labelTitle="Отчество"
            value={patronymic}
            onChange={(e) => setPatronymic(e.currentTarget.value)}
            placeholder="Введите отчество..."
            register={register("patronymic", {
              required: "Отчество не может быть пустым!",
            })}
            error={errors.patronymic}
          />

          <MyInput
            labelTitle="Логин"
            value={login}
            onChange={(e) => setLogin(e.currentTarget.value)}
            placeholder="Введите логин..."
            register={register("login", {
              required: "Логин не может быть пустым!",
            })}
            error={errors.login}
          />
          <MyInput
            labelTitle="Роль (1 - Админ, 2 - Редактор)"
            value={roleId}
            onChange={(e) => setRoleId(Number(e.currentTarget.value))}
            placeholder="Введите роль (1 - Админ, 2 - Редактор)..."
            register={register("role", {
              required: "Роль не может быть пустой!",
            })}
            type="number"
            error={errors.role}
          />
          {!user ? (
            <MyInput
              labelTitle="Пароль"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder={
                user ? "Введите новый пароль..." : "Введите пароль..."
              }
              register={register("password", {
                required: "Пароль не может быть пустым!",
              })}
              error={errors.password}
            />
          ) : (
            <div className={cls.userModalCheckBox}>
              <MyInput
                labelTitle="Желаете изменить пароль?"
                type="checkbox"
                onChange={(e) => setIsPassword((prev) => !prev)}
                className={cls.userModalCheckBox}
              />
            </div>
          )}

          {isPassword && (
            <MyInput
              labelTitle="Пароль"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="Введите пароль..."
              register={register("password", {
                required: "Пароль не может быть пустым!",
              })}
              error={errors.password}
            />
          )}

          {user && (
            <div className={cls.userModalFormImageBlock}>
              <label>Текущее изображение</label>
              <img
                src={
                  import.meta.env.VITE_API_URL + "/images/users/" + user?.image
                }
                alt="user-img"
                className={cls.userModalFormImage}
              />
            </div>
          )}

          {image && (
            <div className={cls.userModalFormImageBlock}>
              <label>Новое изображение</label>
              <img
                src={URL.createObjectURL(image)}
                alt="user_new_img"
                className={cls.userModalFormImage}
              />
            </div>
          )}

          <MyInput labelTitle="Изображение" onChange={selectFile} type="file" />

          <MyButton type="submit">Сохранить</MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default UserModal;
