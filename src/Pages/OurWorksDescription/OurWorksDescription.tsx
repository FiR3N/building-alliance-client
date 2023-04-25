import { FC, Suspense, lazy, useEffect } from "react";
import cls from "./OurWorksDescription.module.scss";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { IWork } from "../../models/IWorks";
import OurWorksDescriptionContent from "./OurWorksDescriptionContent/OurWorksDescriptionContent";

const OurWorksDescription: FC = () => {
  const { pathname, state: workFromState } = useLocation();
  const { id } = useParams();

  let editedPathname, work;
  if (!workFromState) {
    const { data } = useFetch<IWork>(
      import.meta.env.VITE_API_URL + `/works/${id}`
    );
    work = data;
    editedPathname =
      `/` + pathname.split("/").slice(1, 2).toString() + `/${work?.name}`;
  } else {
    editedPathname =
      `/` +
      pathname.split("/").slice(1, 2).toString() +
      `/${workFromState?.name}`;
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <PageLayout title="Наши работы" pathname={editedPathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <OurWorksDescriptionContent
          work={workFromState ? workFromState : work}
        />
      </Suspense>
    </PageLayout>
  );
};

export default OurWorksDescription;
