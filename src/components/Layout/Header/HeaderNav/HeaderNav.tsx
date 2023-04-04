import { FC } from "react";
import cls from "../Header.module.scss";

interface HeaderNavProps {}

const HeaderNav: FC<HeaderNavProps> = () => {
  return <div className={cls.headerNav}>Hello from HeaderNav</div>;
};

export default HeaderNav;
