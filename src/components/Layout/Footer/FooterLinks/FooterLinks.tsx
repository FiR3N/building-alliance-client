import { FC } from "react";
import cls from "../Footer.module.scss";
import classNames from "classnames";
import logo from "../../../../assets/img/logo.png";

const FooterLinks: FC = () => {
  return (
    <div className={cls.footerLinks}>
      <div className={classNames(cls.footerLinksContent, "container")}>
        <div className={cls.footerLinksAbout}>
          <h5>Об организации</h5>
          <span className="bar" />
          <p className="light-text">
            ОАО "Спецстроймеханизация" быстро набирающая обороты организация с
            более чем 40-летним опытом работы на белорусском рынке промышленного
            и гражданского строительства.
          </p>
          <img src={logo} alt="logo" />
        </div>
        <div className={cls.footerLinksMain}>
          <h5>Важные ссылки</h5>
          <span className="bar" />
          <ul className={cls.footerLinksMainList}>
            <li className={cls.footerLinksMainItem}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
              <a href="/about-us" className="light-text">
                О компании
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
              <a href="/certificates" className="light-text">
                Сертификаты
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
              <a href="/services" className="light-text">
                Услуги
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
              <a href="/our-works" className="light-text">
                Наши работы
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
              <a href="/contact" className="light-text">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className={cls.footerLinksContacts}>
          <h5>Контакты</h5>
          <span className="bar" />
          <a
            href="https://yandex.by/maps/26001/molodcheno/?ll=26.798111%2C54.312940&mode=whatshere&whatshere%5Bpoint%5D=26.797035%2C54.312968&whatshere%5Bzoom%5D=17&z=18"
            className="light-text"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
            </svg>
            <p className="light-text">ул. Великий Гостинец 1А</p>
          </a>
          <a
            href="mailto:oao-ssm@mail.ru?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
            className="light-text"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
            <p className="light-text">Почта: oao-ssm@mail.ru</p>
          </a>
          <a href="tel:8 0176 50 06 50" className="light-text">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              ></path>
            </svg>
            <p className="light-text">8 0176 50 06 50</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
