import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INews } from "../models/Entity/INews";
import { getAccessToken } from "../utils/GetAccessToken";

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
    prepareHeaders: (headers) => {
      const token = getAccessToken();
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),

  tagTypes: ["News"],
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
      providesTags: (result) => ["News"],
    }),
    postNews: build.mutation<INews, { formData: FormData }>({
      query: ({ formData }) => ({
        url: `/news`,
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["News"],
    }),
    putNews: build.mutation<INews, { id: Number; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/news/${id}`,
        method: "put",
        body: formData,
      }),
      invalidatesTags: ["News"],
    }),
    deleteNews: build.mutation<INews, { id: Number }>({
      query: ({ id }) => ({
        url: `/news/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["News"],
    }),
  }),
});
