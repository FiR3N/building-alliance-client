import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IWork } from "../models/Entity/IWorks";

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
  tagTypes: ["Work"],
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
      providesTags: (result) => ["Work"],
    }),
    postWork: build.mutation<IWork, { formData: FormData }>({
      query: ({ formData }) => ({
        url: `/works`,
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["Work"],
    }),
    putWork: build.mutation<IWork, { id: Number; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/works/${id}`,
        method: "put",
        body: formData,
      }),
      invalidatesTags: ["Work"],
    }),
    deleteWork: build.mutation<IWork, { id: Number }>({
      query: ({ id }) => ({
        url: `/works/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Work"],
    }),
  }),
});
