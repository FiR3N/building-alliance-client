import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import { ROUTES } from "./Routes";
import Employees from "../pages/Employees/Employees";
import { Suspense, lazy } from "react";
import Loader from "../components/UI/Loader/Loader";
import News from "../pages/News/News";

const Contact = lazy(() => import("../pages/Contact/Contact"));

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
      <Route path={ROUTES.News.en} element={<News />} />
    </Routes>
  );
};

export default AppRouter;
