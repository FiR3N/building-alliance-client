import { FC, Suspense, lazy, useEffect } from "react";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import NewsDescriptionContent from "./NewsDescriptionContent/NewsDescriptionContent";
import useFetch from "../../hooks/useFetch";
import { INews } from "../../models/INews";

interface NewsDescriptionProps {}

const NewsDescription: FC<NewsDescriptionProps> = () => {
  const { pathname, state: newsFromState } = useLocation();
  const { id } = useParams();

  let editedPathname, news;
  if (!newsFromState) {
    const { data } = useFetch<INews>(
      import.meta.env.VITE_API_URL + `/news/${id}`
    );
    news = data;
    editedPathname =
      `/` + pathname.split("/").slice(1, 2).toString() + `/${news?.name}`;
  } else {
    editedPathname =
      `/` +
      pathname.split("/").slice(1, 2).toString() +
      `/${newsFromState?.name}`;
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <PageLayout title="Новости" pathname={editedPathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <NewsDescriptionContent news={newsFromState ? newsFromState : news} />
      </Suspense>
    </PageLayout>
  );
};

export default NewsDescription;
