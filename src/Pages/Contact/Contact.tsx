import { FC } from "react";
import cls from "./Contact.module.scss";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return <div className={cls.contact}>Hello from Contact</div>;
};

export default Contact;
