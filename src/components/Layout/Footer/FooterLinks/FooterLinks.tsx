import { FC } from "react";
import cls from "../Footer.module.scss";
import classNames from "classnames";
import logo from "../../../../assets/img/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill, BsGeoAltFill } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const FooterLinks: FC = () => {
  return (
    <div className={cls.footerLinks}>
      <div className={classNames(cls.footerLinksContent, "container")}>
        <div className={cls.footerLinksAbout}>
          <h5>О организации</h5>
          <span className="bar" />
          <p className="light-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever.
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
              ул. Великий Гостинец д.46
            </a>
          </p>
          <p className="light-text">
            <AiOutlineMail />
            <a
              href="mailto:buildingalliance@gmail.com@example.com?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
              className="light-text"
            >
              buildingalliance@gmail.com
            </a>
          </p>
          <p className="light-text">
            <BsFillTelephoneFill />
            <a href="tel:+375 33 333-33-33" className="light-text">
              +375 33 333-33-33
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
