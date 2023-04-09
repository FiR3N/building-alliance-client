import { FC } from "react";
import cls from "./Contact.module.scss";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsGeoAltFill } from "react-icons/bs";
import MyInput from "../../components/UI/MyInput/MyInput";
import { useForm, SubmitHandler } from "react-hook-form";
import IContact from "../../models/IContact";
import MyTextArea from "../../components/UI/MyTextArea/MyTextArea";
import MyButton from "../../components/UI/MyButton/MyButton";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IContact>();

  const onSubmit: SubmitHandler<IContact> = async (data) => {};

  return (
    <PageLayout title="Обратная связь" pathname={pathname}>
      <div className={cls.contact}>
        <div className={classNames(cls.contactContent, "container")}>
          <div className={cls.contactMain}>
            <h2>Мы рады ответить на любые вопросы</h2>
            <p className="default-text">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <MyInput
                register={
                  (register("name"), { required: "Имя не может быть пустым!" })
                }
                error={errors.name}
                placeholder="Введите имя:"
              />
              <MyInput
                register={
                  (register("surname"),
                  { required: "Фамилия не может быть пустой!" })
                }
                error={errors.surname}
                placeholder="Введите фамилию:"
              />
              <MyInput
                register={
                  (register("email"),
                  { required: "Почта не может быть пустой!" })
                }
                error={errors.email}
                placeholder="Введите email:"
              />
              <MyInput
                register={
                  (register("phone"),
                  { required: "Телефон не может быть пустым!" })
                }
                error={errors.name}
                placeholder="Введите номер телефона:"
              />
              <MyInput
                register={
                  (register("name"),
                  { required: "Имя организации не может быть пустым!" })
                }
                error={errors.name}
                placeholder="Введите имя организации:"
              />

              <MyInput
                register={
                  (register("subject"),
                  { required: "Тема не может быть пустой" })
                }
                error={errors.name}
                placeholder="Введите тему:"
              />
              <MyTextArea
                register={
                  (register("text"), { required: "Текст не может быть пустой" })
                }
                error={errors.name}
                maxLength={700}
                placeholder="Введите текст:"
              />
              <MyButton>Отправить</MyButton>
            </form>
          </div>
          <div className={cls.contactInfo}>
            <h5>Наши офисы</h5>
            <div className={cls.contactOffices}>
              <div className={cls.contactOffice}>
                <p className={cls.contactOfficeTown}>Минский офис</p>
                <p className="default-text">
                  <BsGeoAltFill />
                  <a
                    href="https://www.google.com/maps"
                    className="default-text"
                  >
                    ул. Великий Гостинец д.46
                  </a>
                </p>
                <p className="default-text">
                  <MdEmail />
                  <a
                    href="mailto:buildingalliance@gmail.com@example.com?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
                    className="default-text"
                  >
                    buildingalliance@gmail.com
                  </a>
                </p>
                <p className="default-text">
                  <BsFillTelephoneFill />
                  <a href="tel:+375 33 333-33-33" className="default-text">
                    +375 33 333-33-33
                  </a>
                </p>
              </div>
              <div className={cls.contactOffice}>
                <p className={cls.contactOfficeTown}>Молодечненский оффис</p>
                <p className="default-text">
                  <BsGeoAltFill />
                  <a
                    href="https://www.google.com/maps"
                    className="default-text"
                  >
                    ул. Великий Гостинец д.46
                  </a>
                </p>
                <p className="default-text">
                  <MdEmail />
                  <a
                    href="mailto:buildingalliance@gmail.com@example.com?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
                    className="default-text"
                  >
                    buildingalliance@gmail.com
                  </a>
                </p>
                <p className="default-text">
                  <BsFillTelephoneFill />
                  <a href="tel:+375 33 333-33-33" className="default-text">
                    +375 33 333-33-33
                  </a>
                </p>
              </div>
            </div>

            {/* <h5>Наши контакты</h5>
            <p className="default-text">
              <BsGeoAltFill />
              <a href="https://www.google.com/maps" className="default-text">
                ул. Великий Гостинец д.46
              </a>
            </p>
            <p className="default-text">
              <MdEmail />
              <a
                href="mailto:buildingalliance@gmail.com@example.com?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
                className="default-text"
              >
                buildingalliance@gmail.com
              </a>
            </p>
            <p className="default-text">
              <BsFillTelephoneFill />
              <a href="tel:+375 33 333-33-33" className="default-text">
                +375 33 333-33-33
              </a>
            </p> */}
            {/* <h5>Мы на карте</h5>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff8f0743d051733309a2ec3167bc348658c9c3e160a94e099262737896d8be60&amp;source=constructor" /> */}
          </div>
        </div>
        <div className={cls.contactMap}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff8f0743d051733309a2ec3167bc348658c9c3e160a94e099262737896d8be60&amp;source=constructor" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
