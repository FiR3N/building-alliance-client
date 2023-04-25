import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { newsAPI } from "../api/NewsService";
import { worksAPI } from "../api/WorksService";

const rootReducer = combineReducers({
  // userReducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
  [worksAPI.reducerPath]: worksAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(newsAPI.middleware)
        .concat(worksAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
