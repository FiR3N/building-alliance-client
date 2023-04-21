import { Dispatch, FC, SetStateAction } from "react";
import cls from "./Navbar.module.scss";
import CustomLink from "../../UI/CustomLink/CustomLink";
import PopupHeaderMenu from "../../UI/PopupHeaderMenu/PopupHeaderMenu";
import ILinkItem from "../../../models/ILinkItem";

interface NavbarProps {
  setIsActive?: Dispatch<SetStateAction<boolean>>;
  isMobile?: boolean;
}

const Navbar: FC<NavbarProps> = ({ setIsActive, isMobile }) => {
  const informationLinks: ILinkItem[] = [
    { name: "О компании", to: "/about-company" },
    { name: "Наша история", to: "/history" },
    { name: "Наши проекты", to: "/information/projects" },
    { name: "Рабочий процесс", to: "work-process" },
    { name: "Отзывы", to: "/reviews" },
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
          {/* <CustomLink to="/contact">Информация</CustomLink> */}
          {isMobile ? (
            <>
              <ul className={cls.navbarSecondList}>
                <p className="nav-link">Информация</p>

                {informationLinks.map((item) => (
                  <li key={item.to}>
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
        {/* <li>
          <CustomLink to="/shop">Магазин</CustomLink>
        </li> */}
        <li>
          <CustomLink to="/our-objects">Наши объекты</CustomLink>
        </li>
        <li>
          <CustomLink to="/news">Новости</CustomLink>
        </li>
        {/* <li>
          <CustomLink to="/employees">Работники</CustomLink>
        </li> */}
        <li>
          <CustomLink to="/contact">Обратная связь</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
