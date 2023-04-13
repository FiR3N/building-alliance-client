import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { newsAPI } from "../api/NewsService";

const rootReducer = combineReducers({
  // userReducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(newsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
