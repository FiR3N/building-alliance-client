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
    const separatePathname = pathname.split("/").splice(1);
    let currentRoute: any;
    if (separatePathname.length === 1) {
      currentRoute = Object.values(ROUTES).find(
        (route) => route.en === pathname
      );
    } else {
      currentRoute = [
        Object.values(ROUTES).find(
          (route) => route.en === `/${separatePathname[0]}`
        ),
        separatePathname[1],
      ];
    }
    return (
      <div className={cls.pageLayout}>
        <div className={cls.pageLayoutTitle}>
          <img className={cls.bg} src={bg} alt="bg" />
          <div className={classNames(cls.pageLayoutTitleContent, "container")}>
            <p className={cls.pageLayoutTitleName}>{title}</p>
            <p className={cls.pageLayoutTitleUrl}>
              <Link to="/">Главная</Link>{" "}
              <span>
                <RiArrowRightSFill />
              </span>{" "}
              {separatePathname.length === 1 ? (
                currentRoute.ru
              ) : (
                <>
                  <Link to={currentRoute[0].en}>{currentRoute[0].ru}</Link>
                  <span>
                    <RiArrowRightSFill />
                  </span>
                  {currentRoute[1]?.split("-").join(" ")}
                </>
              )}
            </p>
          </div>
        </div>

        <div className={cls.pageLayoutMain}>{children}</div>
      </div>
    );
  }
);

export default PageLayout;
