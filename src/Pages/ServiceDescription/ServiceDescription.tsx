import { FC, Suspense, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IService } from "../../models/IService";
import useFetch from "../../hooks/useFetch";
import PageLayout from "../../components/UI/PageLayout/PageLayout";
import Loader from "../../components/UI/Loader/Loader";
import ServiceDescriptionContent from "./ServiceDescriptionContent/ServiceDescriptionContent";

const ServiceDescription: FC = () => {
  const { pathname, state: serviceFromState } = useLocation();
  const { id } = useParams();

  let editedPathname, service;
  if (!serviceFromState) {
    const { data } = useFetch<IService>(
      import.meta.env.VITE_API_URL + `/services/${id}`
    );
    service = data;
    editedPathname =
      `/` + pathname.split("/").slice(1, 2).toString() + `/${service?.name}`;
  } else {
    editedPathname =
      `/` +
      pathname.split("/").slice(1, 2).toString() +
      `/${serviceFromState?.name}`;
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <PageLayout title="Услуги" pathname={editedPathname}>
      <Suspense fallback={<Loader withMargins={true} />}>
        <ServiceDescriptionContent
          service={serviceFromState ? serviceFromState : service}
        />
      </Suspense>
    </PageLayout>
  );
};

export default ServiceDescription;
