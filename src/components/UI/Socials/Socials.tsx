import { FC } from "react";
import cls from "./Socials.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";

const Socials: FC = () => {
  return (
    <div className={cls.socials}>
      <a href="https://ru-ru.facebook.com/" target="_blank">
        <AiFillFacebook />
      </a>
      <a href="https://vk.com/" target="_blank">
        <SlSocialVkontakte />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <AiFillInstagram />
      </a>
      <a href="https://web.telegram.org/" target="_blank">
        <FaTelegramPlane />
      </a>
    </div>
  );
};

export default Socials;
