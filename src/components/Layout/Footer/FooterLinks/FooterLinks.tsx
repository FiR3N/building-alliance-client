import { FC } from "react";
import cls from "../Footer.module.scss";
import classNames from "classnames";
import logo from "../../../../assets/img/logo.png";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsGeoAltFill } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
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
              <MdKeyboardDoubleArrowRight />
              <a href="/about-us" className="light-text">
                О компании
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <MdKeyboardDoubleArrowRight />
              <a href="/certificates" className="light-text">
                Сертификаты
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <MdKeyboardDoubleArrowRight />
              <a href="/services" className="light-text">
                Услуги
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <MdKeyboardDoubleArrowRight />
              <a href="/our-works" className="light-text">
                Наши работы
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <MdKeyboardDoubleArrowRight />
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
            <BsGeoAltFill />
            <p className="light-text">ул. Великий Гостинец 1А</p>
          </a>
          <a
            href="mailto:oao-ssm@mail.ru?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
            className="light-text"
          >
            <MdEmail />
            <p className="light-text">Почта: oao-ssm@mail.ru</p>
          </a>
          <a href="tel:8 0176 50 06 50" className="light-text">
            <BsFillTelephoneFill />
            <p className="light-text">8 0176 50 06 50</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
