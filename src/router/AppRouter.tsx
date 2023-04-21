import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import { ROUTES } from "./Routes";
import Employees from "../pages/Employees/Employees";
import { Suspense, lazy } from "react";
import Loader from "../components/UI/Loader/Loader";
import News from "../pages/News/News";
import NewsDescription from "../pages/NewsDescription/NewsDescription";
// import History from "../pages/History/History";
// import Reviews from "../pages/Reviews/Reviews";
// import WorkProcess from "../pages/WorkProcess/WorkProcess";
// import AboutCompany from "../pages/AboutCompany/AboutCompany";

const Contact = lazy(() => import("../pages/Contact/Contact"));
const History = lazy(() => import("../pages/History/History"));
const Reviews = lazy(() => import("../pages/Reviews/Reviews"));
const WorkProcess = lazy(() => import("../pages/WorkProcess/WorkProcess"));
const AboutCompany = lazy(() => import("../pages/AboutCompany/AboutCompany"));

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

      <Route path={ROUTES.NEWS.en} element={<News />} />
      <Route path={ROUTES.NEWSPAGE.en} element={<NewsDescription />} />

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
    </Routes>
  );
};

export default AppRouter;
