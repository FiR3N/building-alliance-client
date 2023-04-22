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
              <a href="/" className="light-text">
                Architectural Design
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <MdKeyboardDoubleArrowRight />
              <a href="/" className="light-text">
                Building Construction
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <MdKeyboardDoubleArrowRight />
              <a href="/" className="light-text">
                Flooring & Roofing
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <MdKeyboardDoubleArrowRight />
              <a href="/" className="light-text">
                General Construction
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <MdKeyboardDoubleArrowRight />
              <a href="/" className="light-text">
                Interior Design
              </a>
            </li>
            <li className={cls.footerLinksMainItem}>
              <MdKeyboardDoubleArrowRight />
              <a href="/" className="light-text">
                INT/EXT Painting
              </a>
            </li>
          </ul>
        </div>
        <div className={cls.footerLinksContacts}>
          <h5>Контакты</h5>
          <span className="bar" />
          <p className="light-text">
            <BsGeoAltFill />
            <a href="https://www.google.com/maps" className="light-text">
              ул. Великий Гостинец 1А
            </a>
          </p>
          <p className="light-text">
            <MdEmail />
            <a
              href="mailto:oao-ssm@mail.ru?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
              className="light-text"
            >
              Почта: oao-ssm@mail.ru
            </a>
          </p>
          <p className="light-text">
            <BsFillTelephoneFill />
            <a href="tel:8 0176 50 06 50" className="light-text">
              8 0176 50 06 50
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
