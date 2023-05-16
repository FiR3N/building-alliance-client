import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { getAccessToken } from "../utils/GetAccessToken";
import { IVacancy } from "../models/Entity/IVacancy";

export const vacancyAPI = createApi({
  reducerPath: "vacancyAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    // Add preprocess function to modify request headers
    prepareHeaders: (headers) => {
      const token = getAccessToken();
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),

  tagTypes: ["Vacancy"],
  endpoints: (build) => ({
    getNews: build.query<IVacancy[], {}>({
      query: () => ({
        url: `/vacancies`,
        method: "GET",
      }),
      providesTags: (result) => ["Vacancy"],
    }),
    postVacancy: build.mutation<IVacancy, { formData: FormData }>({
      query: ({ formData }) => ({
        url: `/vacancies`,
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["Vacancy"],
    }),
    putWork: build.mutation<IVacancy, { id: Number; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/vacancies/${id}`,
        method: "put",
        body: formData,
      }),
      invalidatesTags: ["Vacancy"],
    }),
    deleteWork: build.mutation<IVacancy, { id: Number }>({
      query: ({ id }) => ({
        url: `/vacancies/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Vacancy"],
    }),
  }),
});
