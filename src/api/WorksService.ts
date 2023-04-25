import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IWork } from "../models/IWorks";

interface IWorkQuery {
  limit: number;
  page: number;
}

interface IWorkResponse {
  count: number;
  rows: IWork[];
}

export const worksAPI = createApi({
  reducerPath: "worksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    getWorks: build.query<IWorkResponse, IWorkQuery>({
      query: ({ page, limit }) => ({
        url: `/works`,
        method: "GET",
        params: {
          page,
          limit,
        },
      }),
    }),
  }),
});
