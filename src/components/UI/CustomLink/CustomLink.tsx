import { FC } from "react";
import cls from "./CustomLink.module.scss";
import { Link, useMatch } from "react-router-dom";
import classNames from "classnames";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomLink: FC<CustomLinkProps> = ({ to, children, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });
  return (
    <Link
      to={to}
      className={classNames(match && cls.activeCustomLink, cls.customLink)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
