import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { $api } from ".";
import { IService } from "../models/Entity/IService";

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
  }),
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
    }),
  }),
});
