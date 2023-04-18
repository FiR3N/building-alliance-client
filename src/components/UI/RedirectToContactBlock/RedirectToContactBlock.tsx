import { FC } from "react";
import cls from "./RedirectToContactBlock.module.scss";
import classNames from "classnames";
import redirectToContactBg from "../../../assets/img/redirect-to-contact-bg.jpg";
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";

interface RedirectToContactBlockProps {}

const RedirectToContactBlock: FC<RedirectToContactBlockProps> = () => {
  return (
    <div className={cls.redirectToContactBlock}>
      <img
        className={cls.redirectToContactBlockBg}
        src={redirectToContactBg}
        alt="bg"
      />
      <div
        className={classNames(cls.redirectToContactBlockContent, "container")}
      >
        <h2>Ищете эксклюзивные строительные услуги?</h2>

        <Link to="/contact">
          <MyButton>Наши контакты</MyButton>
        </Link>
      </div>
    </div>
  );
};

export default RedirectToContactBlock;
