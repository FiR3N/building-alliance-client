import { FC } from "react";
import cls from "../Header.module.scss";
import classNames from "classnames";
import Socials from "../../../UI/Socials/Socials";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
interface HeaderInfoProps {}

const HeaderInfo: FC<HeaderInfoProps> = () => {
  return (
    <div className={cls.headerInfo}>
      <div className={classNames(cls.headerInfoContent, "container")}>
        <div className={cls.headerInfoContentContacts}>
          <div className={cls.headerInfoContentContactsItem}>
            <AiOutlineMail />
            <a
              href="mailto:buildingalliance@gmail.com@example.com?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
              className="light-text"
            >
              Почта: buildingalliance@gmail.com
            </a>
          </div>
          <div className={cls.headerInfoContentContactsItem}>
            <BsFillTelephoneFill />
            <a href="tel:+375 33 333-33-33" className="light-text">
              Телефон: +375 33 333-33-33
            </a>
          </div>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default HeaderInfo;
