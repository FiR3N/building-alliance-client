import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import { ROUTES } from "./Routes";
import Employees from "../pages/Employees/Employees";
import { Suspense, lazy } from "react";
import Loader from "../components/UI/Loader/Loader";

const Contact = lazy(() => import("../pages/Contact/Contact"));
const History = lazy(() => import("../pages/History/History"));
const Reviews = lazy(() => import("../pages/Reviews/Reviews"));
const WorkProcess = lazy(() => import("../pages/WorkProcess/WorkProcess"));
const AboutCompany = lazy(() => import("../pages/AboutCompany/AboutCompany"));
const News = lazy(() => import("../pages/News/News"));
const NewsDescription = lazy(
  () => import("../pages/NewsDescription/NewsDescription")
);
const Certificate = lazy(() => import("../pages/Certificate/Certificate"));
const Services = lazy(() => import("../pages/Services/Services"));
const ServiceDescription = lazy(
  () => import("../pages/ServiceDescription/ServiceDescription")
);

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME.en} element={<Main />} />
      <Route
        path={ROUTES.CONTACT.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <Contact />
          </Suspense>
        }
      />
      <Route path={ROUTES.EMPLOYEES.en} element={<Employees />} />

      <Route
        path={ROUTES.NEWS.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <News />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.NEWSPAGE.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <NewsDescription />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.SERVICES.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.SERVICESPAGE.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <ServiceDescription />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.HISTORY.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <History />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.REVIEWS.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <Reviews />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.WORPPROCESS.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <WorkProcess />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.ABOUT.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <AboutCompany />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.CERTIFICATE.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <Certificate />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
