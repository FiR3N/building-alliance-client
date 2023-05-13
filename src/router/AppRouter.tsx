import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./Routes";
// import Employees from "../pages/Employees/Employees";
import { Suspense, lazy } from "react";
import Loader from "../components/UI/Loader/Loader";
import { useTypeSelector } from "../hooks/useTypeSelector";

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
const OurWorks = lazy(() => import("../pages/OurWorks/OurWorks"));
const OurWorksDescription = lazy(
  () => import("../pages/OurWorksDescription/OurWorksDescription")
);
const About = lazy(() => import("../pages/About/About"));
const Vacancies = lazy(() => import("../pages/Vacancies/Vacancies"));
const AdminLogin = lazy(() => import("../pages/AdminLogin/AdminLogin"));
const Admin = lazy(() => import("../pages/Admin/Admin"));
const AdminSettings = lazy(
  () => import("../pages/AdminSettings/AdminSettings")
);
const Main = lazy(() => import("../pages/Main/Main"));

const AppRouter = () => {
  const { isAuth } = useTypeSelector((state) => state.userReducer);

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
      {/* <Route path={ROUTES.EMPLOYEES.en} element={<Employees />} /> */}

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
        path={ROUTES.OURWORKS.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <OurWorks />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.OURWORKSPAGE.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <OurWorksDescription />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.VACANCIES.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <Vacancies />
          </Suspense>
        }
      />
      {isAuth && (
        <>
          <Route
            path={ROUTES.ADMIN.en}
            element={
              <Suspense fallback={<Loader withMargins={true} />}>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.ADMINSETTINGS.en}
            element={
              <Suspense fallback={<Loader withMargins={true} />}>
                <AdminSettings />
              </Suspense>
            }
          />
        </>
      )}
      <Route
        path={ROUTES.ADMIN.en}
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <AdminLogin />
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
            <About />
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
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader withMargins={true} />}>
            <Main />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
