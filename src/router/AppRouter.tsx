import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Contact from "../pages/Contact/Contact";
import { ROUTES } from "./Routes";
import Employees from "../pages/Employees/Employees";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME.en} element={<Main />} />
      <Route path={ROUTES.CONTACT.en} element={<Contact />} />
      <Route path={ROUTES.EMPLOYEES.en} element={<Employees />} />
    </Routes>
  );
};

export default AppRouter;
