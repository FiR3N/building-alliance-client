import React, { useEffect } from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import AppRouter from "./router/AppRouter";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { refresh } from "./store/actionCreators/userActions";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(refresh());
    }
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <AppRouter />
      </Layout>
    </React.Fragment>
  );
}

export default App;
