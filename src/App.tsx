import React from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <AppRouter />
      </Layout>
    </React.Fragment>
  );
}

export default App;
