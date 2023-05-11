import { FC, useState } from "react";
import cls from "./PopupHeaderMenu.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import ILinkItem from "../../../models/ILinkItem";
import { ROUTES } from "../../../router/Routes";

interface PopupHeaderMenuProps {
  title: string;
  items: ILinkItem[];
}

const PopupHeaderMenu: FC<PopupHeaderMenuProps> = ({ title, items }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { pathname } = useLocation();

  return (
    <div
      className={cls.popupHeaderMenu}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className={classNames(
          cls.popupHeaderMenuTitle,
          isActive && cls._active
        )}
      >
        <p
          className={classNames(
            (pathname.includes(ROUTES.ABOUT.en) ||
              pathname.includes(ROUTES.HISTORY.en) ||
              pathname.includes(ROUTES.CERTIFICATE.en)) &&
              cls._isOnRoute
          )}
        >
          {title}
        </p>
        <MdOutlineKeyboardArrowDown
          className={classNames(
            (pathname.includes(ROUTES.ABOUT.en) ||
              pathname.includes(ROUTES.HISTORY.en) ||
              pathname.includes(ROUTES.CERTIFICATE.en)) &&
              cls._isOnRoute
          )}
        />
      </div>
      <div
        className={classNames(
          cls.popupHeaderMenuContent,
          isActive && cls._active
        )}
        onClick={() => setIsActive(false)}
      >
        {items.map((item) => (
          <Link to={item.to} key={item.to}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopupHeaderMenu;
