import { FC } from "react";
import cls from "./News.module.scss";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation } from "react-router-dom";
import NewsList from "../../components/Business/NewsList/NewsList";

interface NewsProps {}

const News: FC<NewsProps> = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout title="Новости" pathname={pathname}>
      <NewsList />
    </PageLayout>
  );
};

export default News;
