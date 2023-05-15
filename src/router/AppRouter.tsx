import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./Routes";
import { Suspense, lazy } from "react";
import Loader from "../components/UI/Loader/Loader";
import { useTypeSelector } from "../hooks/useTypeSelector";

const Contact = lazy(() => import("../Pages/Contact/Contact"));
const History = lazy(() => import("../Pages/History/History"));
const Reviews = lazy(() => import("../Pages/Reviews/Reviews"));
const WorkProcess = lazy(() => import("../Pages/WorkProcess/WorkProcess"));
const AboutCompany = lazy(() => import("../Pages/AboutCompany/AboutCompany"));
const News = lazy(() => import("../Pages/News/News"));
const NewsDescription = lazy(
  () => import("../Pages/NewsDescription/NewsDescription")
);
const Certificate = lazy(() => import("../Pages/Certificate/Certificate"));
const Services = lazy(() => import("../Pages/Services/Services"));
const ServiceDescription = lazy(
  () => import("../Pages/ServiceDescription/ServiceDescription")
);
const OurWorks = lazy(() => import("../Pages/OurWorks/OurWorks"));
const OurWorksDescription = lazy(
  () => import("../Pages/OurWorksDescription/OurWorksDescription")
);
const About = lazy(() => import("../Pages/About/About"));
const Vacancies = lazy(() => import("../Pages/Vacancies/Vacancies"));
const AdminLogin = lazy(() => import("../Pages/AdminLogin/AdminLogin"));
const Admin = lazy(() => import("../Pages/Admin/Admin"));
const AdminSettings = lazy(
  () => import("../Pages/AdminSettings/AdminSettings")
);
const Main = lazy(() => import("../Pages/Main/Main"));

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
