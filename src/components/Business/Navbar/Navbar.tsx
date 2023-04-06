import { Dispatch, FC, SetStateAction } from "react";
import cls from "./Navbar.module.scss";
import CustomLink from "../../UI/CustomLink/CustomLink";
import PopupHeaderMenu from "../../UI/PopupHeaderMenu/PopupHeaderMenu";

interface NavbarProps {
  setIsActive?: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FC<NavbarProps> = ({ setIsActive }) => {
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
          <PopupHeaderMenu
            title="Информация"
            items={[
              { name: "Об компании", to: "/information/company" },
              { name: "Наша история", to: "/information/history" },
              { name: "Наши проекты", to: "/information/projects" },
              { name: "Рабочий процесс", to: "/information/work-process" },
              { name: "Отзывы", to: "/information/reviews" },
            ]}
          />
        </li>
        <li>
          <CustomLink to="/services">Услуги</CustomLink>
        </li>
        <li>
          <CustomLink to="/shop">Магазин</CustomLink>
        </li>
        <li>
          <CustomLink to="/news">Новости</CustomLink>
        </li>
        <li>
          <CustomLink to="/employees">Работники</CustomLink>
        </li>
        <li>
          <CustomLink to="/contact">Обратная связь</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
