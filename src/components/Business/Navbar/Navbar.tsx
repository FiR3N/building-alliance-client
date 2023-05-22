import { Dispatch, FC, SetStateAction } from "react";
import cls from "./Navbar.module.scss";
import CustomLink from "../../UI/CustomLink/CustomLink";
import PopupHeaderMenu from "../../UI/PopupHeaderMenu/PopupHeaderMenu";
import ILinkItem from "../../../models/ILinkItem";

import doubleArrows from "../../../assets/img/double-right-arrows.png";

interface NavbarProps {
  setIsActive?: Dispatch<SetStateAction<boolean>>;
  isMobile?: boolean;
}

const Navbar: FC<NavbarProps> = ({ setIsActive, isMobile }) => {
  const informationLinks: ILinkItem[] = [
    { name: "Об организации", to: "/about-us" },
    { name: "Наша история", to: "/history" },
    { name: "Сертификаты", to: "/certificates" },
  ];

  return (
    <nav className={cls.navbar}>
      <ul
        onClick={() => {
          if (setIsActive) setIsActive((prev) => !prev);
        }}
      >
        <li>
          <CustomLink to="/">Главная</CustomLink>
        </li>
        <li>
          {isMobile ? (
            <>
              <ul className={cls.navbarSecondList}>
                <p className="nav-link">Информация</p>
                {informationLinks.map((item) => (
                  <li key={item.to}>
                    <img src={doubleArrows} alt="две стрелки" />;
                    <CustomLink to={item.to} key={item.name}>
                      {item.name}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <PopupHeaderMenu title="Информация" items={informationLinks} />
          )}
        </li>
        <li>
          <CustomLink to="/services">Услуги</CustomLink>
        </li>
        <li>
          <CustomLink to="/our-works">Наши работы</CustomLink>
        </li>
        <li>
          <CustomLink to="/news">Новости</CustomLink>
        </li>
        <li>
          <CustomLink to="/vacancies">Вакансии</CustomLink>
        </li>
        <li>
          <CustomLink to="/contact">Контакты</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
