import { FC, memo } from "react";
import cls from "./Header.module.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderNav from "./HeaderNav/HeaderNav";

interface HeaderProps {}

const Header: FC<HeaderProps> = memo(() => {
  return (
    <header className={cls.header}>
      <HeaderInfo />
      <HeaderNav />
    </header>
  );
});

export default Header;
