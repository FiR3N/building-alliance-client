import { FC } from "react";
import cls from "./News.module.scss";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";

interface NewsProps {}

const News: FC<NewsProps> = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout title="Новости" pathname={pathname}>
      <div className={cls.news}>Hello from News</div>
    </PageLayout>
  );
};

export default News;
