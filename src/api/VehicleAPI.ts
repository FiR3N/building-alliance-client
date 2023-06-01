import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { getAccessToken } from "../utils/GetAccessToken";
import { IVehicle } from "../models/Entity/IVehicle";

export const vehicleAPI = createApi({
  reducerPath: "vehicleAPI",
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
  tagTypes: ["Vehicles"],
  endpoints: (build) => ({
    getVehicles: build.query<IVehicle[], {}>({
      query: ({}) => ({
        url: `/vehicles`,
        method: "GET",
      }),
      providesTags: (result) => ["Vehicles"],
    }),

    postMixture: build.mutation<IVehicle, { formData: FormData }>({
      query: ({ formData }) => ({
        url: `/vehicles`,
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["Vehicles"],
    }),
    putMixture: build.mutation<IVehicle, { id: Number; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/vehicles/${id}`,
        method: "put",
        body: formData,
      }),
      invalidatesTags: ["Vehicles"],
    }),
    deleteMixture: build.mutation<IVehicle, { id: Number }>({
      query: ({ id }) => ({
        url: `/vehicles/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Vehicles"],
    }),
  }),
});
