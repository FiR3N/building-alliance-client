import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Contact from "../Pages/Contact/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
