import { FC } from "react";
import cls from "./CustomAdminLink.module.scss";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

interface CustomAdminLinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomAdminLink: FC<CustomAdminLinkProps> = ({
  to,
  children,
  ...props
}) => {
  const location = useLocation();
  const isActive = location.pathname.includes(to);

  return (
    <Link
      to={to}
      className={classNames(cls.customAdminLink, isActive && cls._active)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomAdminLink;
