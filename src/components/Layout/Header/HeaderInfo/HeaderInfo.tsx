import { FC, memo } from "react";
import cls from "../Header.module.scss";
import classNames from "classnames";

import clock from "../../../../assets/img/clock.png";
import telephone from "../../../../assets/img/telephone.png";
import message from "../../../../assets/img/message.png";

const HeaderInfo: FC = memo(() => {
  return (
    <div className={cls.headerInfo}>
      <div className={classNames(cls.headerInfoContent, "container")}>
        <div className={cls.headerInfoContentContacts}>
          <a
            href="mailto:oao-ssm@mail.ru?subject=Вопрос по теме: (...)&body=Здравствуйте, я хотел бы хотел задать вопрос по теме: (...)"
            className={classNames(
              cls.headerInfoContentContactsItem,
              cls.isLink
            )}
          >
            <img src={message} alt="сообщение" />
            <p className="light-text">Почта: oao-ssm@mail.ru</p>
          </a>
          <a
            href="tel:8 0176 50 06 50"
            className={classNames(
              cls.headerInfoContentContactsItem,
              cls.isLink
            )}
          >
            <img src={telephone} alt="Телефон" />
            <p className="light-text">Телефон приёмной: 8 0176 50 06 50</p>
          </a>
          <div className={cls.headerInfoContentContactsItem}>
            <img src={clock} alt="Часы" />
            <p className="light-text">Время работы: Пн - Пт 8.00 - 17:00</p>
          </div>
        </div>
        {/* <Socials /> */}
      </div>
    </div>
  );
});

export default HeaderInfo;
