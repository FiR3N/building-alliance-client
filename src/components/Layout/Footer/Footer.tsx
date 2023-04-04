import { FC } from "react";
import cls from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return <footer className={cls.footer}>Hello from Footer</footer>;
};

export default Footer;
