import { FC, useLayoutEffect, useState } from "react";
import cls from "../Header.module.scss";
import classNames from "classnames";
import logo from "../../../../assets/img/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../../Business/Navbar/Navbar";
import Socials from "../../../UI/Socials/Socials";
interface HeaderNavProps {}

const HeaderNav: FC<HeaderNavProps> = () => {
  const [isHambActive, setIsHambActive] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (isHambActive) {
      document.querySelector("body")?.classList.add("_noscroll");
    } else {
      document.querySelector("body")?.classList.remove("_noscroll");
    }
  }, [isHambActive]);

  return (
    <div className={cls.headerNav}>
      <div className={classNames(cls.headerNavContent, "container")}>
        <Link to="/">
          <img className={cls.headerNavLogo} src={logo} alt="logo" />
        </Link>
        <Navbar />
        <div className={cls.headerNavButtons}>
          <div className={cls.headerNavCart}>
            <FaShoppingCart />
            <span className={cls.cartCount}>0</span>
          </div>
          <div
            className={cls.headerNavHambContent}
            onClick={() => setIsHambActive((prev) => !prev)}
          >
            <div className={cls.headerNavHamb}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </div>
      {/* //need fixes */}
      <div
        className={classNames(cls.headerNavPopup, isHambActive && cls._active)}
      >
        <div className={classNames(cls.headerNavPopupContent, "container")}>
          <div
            className={cls.headerNavPopupButton}
            onClick={() => setIsHambActive(false)}
          >
            <span className="bar" />
            <span className="bar" />
          </div>
          <Navbar setIsActive={setIsHambActive} isMobile={true} />
          <br />
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
