import { FC, memo } from "react";
import cls from "./PageLayout.module.scss";
import classNames from "classnames";
import bg from "../../../assets/img/page-layout-bg.webp";
import { RiArrowRightSFill } from "react-icons/ri";
import { ROUTES } from "../../../router/Routes";
import { Link } from "react-router-dom";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  pathname: string;
}

const PageLayout: FC<PageLayoutProps> = memo(
  ({ children, title, pathname }) => {
    const currentRoute = Object.values(ROUTES).find(
      (route) => route.en === pathname
    );

    return (
      <div className={cls.pageLayout}>
        <div className={cls.pageLayoutTitle}>
          <img className={cls.bg} src={bg} alt="bg" />
          <div className={classNames(cls.pageLayoutTitleContent, "container")}>
            <p className={cls.pageLayoutTitleName}>{title}</p>
            <p className={cls.pageLayoutTitleUrl}>
              <Link to="/">Главная</Link> <RiArrowRightSFill />{" "}
              {currentRoute?.ru}
            </p>
          </div>
        </div>

        <div className={cls.pageLayoutMain}>{children}</div>
      </div>
    );
  }
);

export default PageLayout;
