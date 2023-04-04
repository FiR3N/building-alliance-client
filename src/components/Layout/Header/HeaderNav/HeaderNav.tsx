import { FC } from "react";
import cls from "../Header.module.scss";
import classNames from "classnames";
import logo from "../../../../assets/img/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../../Business/Navbar/Navbar";
interface HeaderNavProps {}

const HeaderNav: FC<HeaderNavProps> = () => {
  return (
    <div className={cls.headerNav}>
      <div className={classNames(cls.headerNavContent, "container")}>
        <Link to="/">
          <img className={cls.headerNavLogo} src={logo} alt="logo" />
        </Link>
        <Navbar />
        <div className={cls.headerNavCart}>
          <FaShoppingCart />
          <span className={cls.cartCount}>0</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
