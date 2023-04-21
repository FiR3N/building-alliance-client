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
import ContactService from "../../api/ContactService";
import InfoBlock from "../../components/UI/InfoBlock/InfoBlock";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm<IContact>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IContact> = async (data) => {
    await ContactService.sendMessageFromUser(
      data.name,
      data.surname,
      data.email,
      data.text,
      data.subject,
      data.companyName,
      data.telephone
    );
    reset({
      name: "",
      surname: "",
      email: "",
      text: "",
      subject: "",
      telephone: "",
      companyName: "",
    });
  };

  return (
    <PageLayout title="Обратная связь" pathname={pathname}>
      <div className={cls.contact}>
        <div className={classNames(cls.contactContent, "container")}>
          <div className={cls.contactMain}>
            <h2>Мы рады ответить на любые вопросы</h2>
            <p className={classNames(cls.contactMainDesc, "default-text")}>
              Мы ценим ваше мнение и всегда рады ответить на ваши вопросы. Если
              у вас есть предложения или замечания по работе нашей компании,
              пожалуйста, оставьте свой отзыв в форме ниже. Мы обязательно
              рассмотрим все ваши сообщения и постараемся учесть их в работе
              нашей команды. Спасибо, что выбрали нашу строительную компанию!
            </p>
            {isSubmitSuccessful && (
              <InfoBlock blockType={1}>
                Ваше сообщение успешно отправлено
              </InfoBlock>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <MyInput
                register={register("name", {
                  required: "Имя не может быть пустым!",
                  pattern: {
                    value: /[A-Za-zА-Яа-яЁё]{3,32}/,
                    message: "Введите ваше настоящее имя!",
                  },
                })}
                error={errors.name}
                placeholder="Введите имя:"
                type="text"
                disabled={isSubmitting}
              />
              <MyInput
                register={register("surname", {
                  required: "Фамилия не может быть пустой!",
                  pattern: {
                    value: /[A-Za-zА-Яа-яЁё]{3,32}/,
                    message: "Введите вашу настоящею фамилию!",
                  },
                })}
                error={errors.surname}
                placeholder="Введите фамилию:"
                type="text"
                disabled={isSubmitting}
              />
              <MyInput
                register={register("email", {
                  required: "Почта не может быть пустой!",
                  pattern: {
                    value:
                      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                    message: "Неверный формат почты",
                  },
                })}
                error={errors.email}
                placeholder="Введите email:"
                type="text"
                inputMode="email"
                disabled={isSubmitting}
              />
              <MyInput
                register={register("telephone", {
                  required: "Телефон не может быть пустым!",
                  pattern: {
                    value: /\+375\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
                    message: "Неверый формат телефона(+375 ** *** ** **)",
                  },
                })}
                error={errors.telephone}
                placeholder="Введите номер телефона:"
                type="text"
                inputMode="tel"
                maxLength={17}
                disabled={isSubmitting}
              />
              <MyInput
                register={register("companyName", {
                  required: "Имя организации не может быть пустым!",
                })}
                error={errors.companyName}
                placeholder="Введите имя организации:"
                type="text"
                maxLength={60}
                disabled={isSubmitting}
              />

              <MyInput
                register={register("subject", {
                  required: "Тема не может быть пустой",
                })}
                error={errors.subject}
                placeholder="Введите тему: "
                type="text"
                maxLength={100}
                disabled={isSubmitting}
              />
              <MyTextArea
                register={register("text", {
                  required: "Текст не может быть пустой",
                })}
                error={errors.text}
                maxLength={700}
                placeholder="Введите текст:"
                disabled={isSubmitting}
              />
              <MyButton disabled={isSubmitting}>Отправить</MyButton>
            </form>
          </div>
          <div className={cls.contactInfo}>
            <h5>Наши данные</h5>
            <p className="default-text">
              <BsGeoAltFill />
              <a href="https://www.google.com/maps" className="default-text">
                ул. Великий Гостинец 1А
              </a>
            </p>

            <p className="default-text">
              <MdEmail />
              <a
                href="mailto:oao-ssm@mail.ru?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
                className="default-text"
              >
                Почта: oao-ssm@mail.ru
              </a>
            </p>
            <p className="default-text">
              <BsFillTelephoneFill />
              <a href="tel:8 0176 50 06 50" className="default-text">
                8 0176 50 06 50 (приемная)
              </a>
            </p>
            <p className="default-text">
              <BsFillTelephoneFill />
              <a href="tel:8 029 663 02 45" className="default-text">
                8 029 663 02 45 (директор)
              </a>
            </p>
            {/* <div className={cls.contactOffices}>
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
            </div> */}

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
