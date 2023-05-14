import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { newsAPI } from "../api/NewsAPI";
import { worksAPI } from "../api/WorksService";
import { servicesAPI } from "../api/ServicesAPI";
import userReducer from "./slices/userReducer";
import { vacancyAPI } from "../api/VacancyAPI";
import { certificateAPI } from "../api/CertificateAPI";
import { userAPI } from "../api/UserService";

const rootReducer = combineReducers({
  userReducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
  [worksAPI.reducerPath]: worksAPI.reducer,
  [servicesAPI.reducerPath]: servicesAPI.reducer,
  [vacancyAPI.reducerPath]: vacancyAPI.reducer,
  [certificateAPI.reducerPath]: certificateAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(newsAPI.middleware)
        .concat(worksAPI.middleware)
        .concat(servicesAPI.middleware)
        .concat(vacancyAPI.middleware)
        .concat(certificateAPI.middleware)
        .concat(userAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
