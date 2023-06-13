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
import MySelect from "../../../UI/MySelect/MySelect";
import useFetch from "../../../../hooks/useFetch";
import { IRole } from "../../../../models/Entity/IRole";

interface UserModalProps {
  closeMethod: Dispatch<SetStateAction<boolean>>;
  user?: IUser;
}

const UserModal: FC<UserModalProps> = ({ closeMethod, user }) => {
  const { data: roles } = useFetch<IRole[]>(
    import.meta.env.VITE_API_URL + `/roles`
  );

  const newRoles =
    roles?.map(({ id, name }) => ({ id: id, content: name })) || [];
  const [putUser, { error: putError }] = userAPI.usePutUserMutation();
  const [createUser, { error: createError }] = userAPI.usePostUserMutation();

  const [name, setName] = useState<string>(user ? user.name : "");
  const [surname, setSurname] = useState<string>(user ? user.surname : "");
  const [patronymic, setPatronymic] = useState<string>(
    user ? user.patronymic : ""
  );
  const [login, setLogin] = useState<string>(user ? user.login : "");
  const [password, setPassword] = useState<string>("");
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [image, setImage] = useState<File>();
  const [selectedRole, setSelectedRole] = useState<{
    id: number;
    content: string;
  } | null>(null);
  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
    control,
    setValue,
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
    formData.append("roleId", String(selectedRole?.id));
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

  useEffect(() => {
    setSelectedRole(
      user?.roleId
        ? newRoles?.find((item) => item.id === user?.roleId) || null
        : null
    );
  }, [roles]);

  useEffect(() => {
    if (selectedRole?.id) setValue("selectedRole", selectedRole?.id);
  }, [selectedRole]);

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
        {createError && (
          <InfoBlock blockType={-1}>
            Ошибка создания! (Возможно пользователь с таким логином уже
            существует!)
          </InfoBlock>
        )}
        <form className={cls.userModalForm} onSubmit={handleSubmit(onSubmit)}>
          <MyInput
            labelTitle="Имя"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Введите имя..."
            required
            maxLength={50}
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
            required
            maxLength={50}
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
            required
            maxLength={50}
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
            required
            maxLength={30}
            register={register("login", {
              required: "Логин не может быть пустым!",
            })}
            error={errors.login}
          />
          <MySelect
            labelTitle="Роли"
            name={"Выберете роль"}
            array={newRoles}
            selectedItem={selectedRole}
            setSelectedItem={setSelectedRole}
            formName="selectedRole"
            control={control}
            rules={{ required: "Роль должна быть выбрана!" }}
            error={errors.selectedRole}
          />
          {!user ? (
            <MyInput
              labelTitle="Пароль"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder={
                user ? "Введите новый пароль..." : "Введите пароль..."
              }
              required
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
              required
              maxLength={100}
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

          <MyButton disabled={isSubmitting} type="submit">
            Сохранить
          </MyButton>
        </form>
      </div>
    </Modal>
  );
};

export default UserModal;
