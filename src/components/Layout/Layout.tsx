import React, { FC } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ToTheTopButton from "../UI/ToTheTopButton/ToTheTopButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        {children}
        <ToTheTopButton />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
