import { FC, useEffect, useState } from "react";
import cls from "./Contact.module.scss";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsGeoAltFill } from "react-icons/bs";
import MyInput from "../../components/UI/MyInput/MyInput";
import { useForm, SubmitHandler } from "react-hook-form";
import MyTextArea from "../../components/UI/MyTextArea/MyTextArea";
import MyButton from "../../components/UI/MyButton/MyButton";
import EmailService from "../../api/EmailService";
import InfoBlock from "../../components/Blocks/InfoBlock/InfoBlock";
import IContact from "../../models/Forms/IContact";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: FC = () => {
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IContact>({ mode: "onChange" });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean | null>(
    null
  );
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IContact> = async (data) => {
    if (isCaptchaVerified) {
      await EmailService.sendMessageFromUser(
        data.name,
        data.surname,
        data.email,
        data.text,
        data.subject,
        data.companyName,
        data.telephone
      );
      setIsSubmitSuccessful(true);
      reset({
        name: "",
        surname: "",
        email: "",
        text: "",
        subject: "",
        telephone: "",
        companyName: "",
      });
    } else {
      setIsCaptchaVerified(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout title="Контакты" pathname={pathname}>
      <div className={cls.contact}>
        <div className={classNames(cls.contactContent, "container")}>
          <div className={cls.contactInfo}>
            <h2>Наши данные</h2>
            <div className={cls.contactInfoMain}>
              <div className={cls.contactInfoMainItem}>
                <p className={cls.boldTitle}>
                  <BsGeoAltFill />
                  Беларусь, Молодечно
                </p>
                <p className="default-text">ул. Великий Гостинец 1А</p>
              </div>
              <div className={cls.contactInfoMainItem}>
                <p className={cls.boldTitle}>
                  <MdEmail />
                  Наша почта
                </p>
                <a
                  href="mailto:oao-ssm@mail.ru?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
                  className="default-text"
                >
                  oao-ssm@mail.ru
                </a>
              </div>
            </div>
            <div className={cls.contactInfoPeoples}>
              <div className={cls.contactInfoPeoplesItem}>
                <p className={cls.boldTitle}>Приемная директора</p>
                <p className="default-text">Манюк Константин Константинович</p>
                <a href="tel:8 0176 50 06 50 " className="default-text">
                  <BsFillTelephoneFill />8 0176 50-06-50
                </a>
              </div>
              <div className={cls.contactInfoPeoplesItem}>
                <p className={cls.boldTitle}>Отдел кадров</p>
                <p className="default-text">Харук Анна Ивановна</p>
                <a href="tel:8 0176 75 29 32" className="default-text">
                  <BsFillTelephoneFill />8 0176 75-29-32
                </a>
              </div>
              <div className={cls.contactInfoPeoplesItem}>
                <p className={cls.boldTitle}>Главный бухгалтер</p>
                <p className="default-text">Горошкевич Татьяна Степановна</p>
                <a href="tel:8 0176 75 29 42" className="default-text">
                  <BsFillTelephoneFill />8 0176 75-29-42
                </a>
              </div>
            </div>
          </div>
          <div className={cls.contactMain}>
            <h2>Свяжитесь с нами</h2>
            {isSubmitSuccessful && (
              <InfoBlock blockType={1}>
                Ваше сообщение успешно отправлено
              </InfoBlock>
            )}
            {isCaptchaVerified === false && (
              <InfoBlock blockType={-1}>Подвердите, что вы человек</InfoBlock>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <MyInput
                placeholder="Введите имя:"
                type="text"
                disabled={isSubmitting}
                required
                register={register("name", {
                  required: "Имя не может быть пустым!",
                  pattern: {
                    value: /[A-Za-zА-Яа-яЁё]{2,32}/,
                    message: "Введите ваше настоящее имя!",
                  },
                })}
                error={errors.name}
              />
              <MyInput
                placeholder="Введите фамилию:"
                type="text"
                disabled={isSubmitting}
                required
                register={register("surname", {
                  required: "Фамилия не может быть пустой!",
                  pattern: {
                    value: /[A-Za-zА-Яа-яЁё]{2,32}/,
                    message: "Введите вашу настоящею фамилию!",
                  },
                })}
                error={errors.surname}
              />
              <MyInput
                placeholder="Введите email:"
                type="text"
                inputMode="email"
                disabled={isSubmitting}
                required
                register={register("email", {
                  required: "Почта не может быть пустой!",
                  pattern: {
                    value:
                      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                    message: "Неверный формат почты",
                  },
                })}
                error={errors.email}
              />
              <MyInput
                type="tel"
                name="telephone"
                placeholder="Введите телефон..."
                maxLength={19}
                required
                register={register("telephone", {
                  required: "Телефон не может быть пустым!",
                  pattern: {
                    value: /^[+\-\(\)\d\s]{6,}$/,
                    message: "Неверный формат телефона!",
                  },
                })}
                error={errors.telephone}
              />
              <MyInput
                required
                placeholder="Введите имя организации:"
                type="text"
                maxLength={60}
                disabled={isSubmitting}
                register={register("companyName", {
                  required: "Имя организации не может быть пустым!",
                })}
                error={errors.companyName}
              />

              <MyInput
                placeholder="Введите тему: "
                type="text"
                maxLength={100}
                disabled={isSubmitting}
                required
                register={register("subject", {
                  required: "Тема не может быть пустой",
                })}
                error={errors.subject}
              />
              <MyTextArea
                rows={6}
                maxLength={700}
                placeholder="Введите сообщение:"
                disabled={isSubmitting}
                required
                register={register("text", {
                  required: "Сообщение не может быть пустым",
                })}
                error={errors.text}
              />
              <div className={cls.Recaptcha}>
                <ReCAPTCHA
                  sitekey="6LdH3J0mAAAAAMpTtEyi3_OdpxAnTiP7nsd5ZbRd"
                  onChange={() => setIsCaptchaVerified(true)}
                />
              </div>
              <MyButton disabled={isSubmitting}>Отправить</MyButton>
            </form>
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
