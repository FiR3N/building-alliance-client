import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Contact from "../pages/Contact/Contact";
import { ROUTES } from "./Routes";
import Layout from "../components/Layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME.en} element={<Main />} />
      <Route path={ROUTES.CONTACT.en} element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
