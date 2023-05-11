import { FC, memo } from "react";
import cls from "../Header.module.scss";
import classNames from "classnames";
import Socials from "../../../UI/Socials/Socials";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
interface HeaderInfoProps {}

const HeaderInfo: FC<HeaderInfoProps> = memo(() => {
  return (
    <div className={cls.headerInfo}>
      <div className={classNames(cls.headerInfoContent, "container")}>
        <div className={cls.headerInfoContentContacts}>
          <div className={cls.headerInfoContentContactsItem}>
            <AiOutlineMail />
            <a
              href="mailto:oao-ssm@mail.ru?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
              className="light-text"
            >
              Почта: oao-ssm@mail.ru
            </a>
          </div>
          <div className={cls.headerInfoContentContactsItem}>
            <BsFillTelephoneFill />
            <a href="tel:8 0176 50 06 50" className="light-text">
              Телефон приёмной: 8 0176 50 06 50
            </a>
          </div>
          <div className={cls.headerInfoContentContactsItem}>
            <BiTime />
            <p className="light-text">Время работы: Пн - Пт 8.00 - 17:00</p>
          </div>
        </div>
        {/* <Socials /> */}
      </div>
    </div>
  );
});

export default HeaderInfo;
