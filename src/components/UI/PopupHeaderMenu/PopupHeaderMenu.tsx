import { FC, useState } from "react";
import cls from "./PopupHeaderMenu.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CustomLink from "../CustomLink/CustomLink";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface ILinkItem {
  name: string;
  to: string;
}

interface PopupHeaderMenuProps {
  title: string;
  items: ILinkItem[];
}

const PopupHeaderMenu: FC<PopupHeaderMenuProps> = ({ title, items }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const clickHandler = (e: React.MouseEvent) => {
    setIsActive((prev) => !prev);
  };

  console.log(isActive);

  return (
    <div
      className={cls.popupHeaderMenu}
      onMouseEnter={clickHandler}
      onMouseLeave={clickHandler}
    >
      <div
        className={classNames(
          cls.popupHeaderMenuTitle,
          isActive && cls._active
        )}
      >
        <p>{title}</p>
        <MdOutlineKeyboardArrowDown />
      </div>
      <div
        className={classNames(
          cls.popupHeaderMenuContent,
          isActive && cls._active
        )}
      >
        {items.map((item) => (
          <Link to={item.to} key={item.to} onClick={() => setIsActive(false)}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopupHeaderMenu;
