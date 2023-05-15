import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IService } from "../models/Entity/IService";
import { getAccessToken } from "../utils/GetAccessToken";

interface IServicesQuery {
  limit: number;
  page: number;
}

interface IServicesResponse {
  count: number;
  rows: IService[];
}

export const servicesAPI = createApi({
  reducerPath: "servicesAPI",
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
  tagTypes: ["Service"],

  endpoints: (build) => ({
    getServices: build.query<IServicesResponse, IServicesQuery>({
      query: ({ page, limit }) => ({
        url: `/services`,
        method: "GET",
        params: {
          page,
          limit,
        },
      }),
      providesTags: (result) => ["Service"],
    }),
    postService: build.mutation<IService, { formData: FormData }>({
      query: ({ formData }) => ({
        url: `/services`,
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["Service"],
    }),
    putService: build.mutation<IService, { id: Number; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/services/${id}`,
        method: "put",
        body: formData,
      }),
      invalidatesTags: ["Service"],
    }),
    deleteService: build.mutation<IService, { id: Number }>({
      query: ({ id }) => ({
        url: `/services/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Service"],
    }),
  }),
});
