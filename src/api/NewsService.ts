import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INews } from "../models/INews";

interface INewsQuery {
  limit: number;
  page: number;
}

interface INewsResponse {
  count: number;
  rows: INews[];
}

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    getNews: build.query<INewsResponse, INewsQuery>({
      query: ({ page, limit }) => ({
        url: `/news`,
        method: "GET",
        params: {
          page,
          limit,
        },
      }),
    }),
  }),
});
