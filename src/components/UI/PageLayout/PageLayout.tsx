import { FC } from "react";
import cls from "./PageLayout.module.scss";
import classNames from "classnames";
import bg from "../../../assets/img/page-layout-bg.webp";
interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <div className={cls.pageLayout}>
      <div className={cls.pageLayoutTitle}>
        <img className={cls.bg} src={bg} alt="bg" />
        <div className={classNames(cls.pageLayoutTitleContent, "container")}>
          <p className={cls.pageLayoutTitleName}>{title}</p>
          <p className={cls.pageLayoutTitleUrl}>
            Главная {`>`} Обратная связь{" "}
          </p>
        </div>
      </div>

      <div className={classNames(cls.pageLayoutContent, "container")}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
