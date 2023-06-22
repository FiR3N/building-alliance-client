import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import Loader from "./components/UI/Loader/Loader";

const App = lazy(() => import("./App"));

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Loader withMargins absolute />}>
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
