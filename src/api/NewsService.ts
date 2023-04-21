import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INews } from "../models/INews";
import { $api } from ".";

interface INewsQuery {
  limit: number;
  page: number;
  name: string;
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
      query: ({ page, limit, name }) => ({
        url: `/news`,
        method: "GET",
        params: {
          page,
          limit,
          name,
        },
      }),
    }),
    // getNewsByName: build.query<INews, string>({
    //   query: (newsName) => ({
    //     url: `/news/name`,
    //     method: "GET",
    //     params: {
    //       newsName,
    //     },
    //   }),
    // }),
  }),
});
