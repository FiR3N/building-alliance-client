import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { getAccessToken } from "../utils/GetAccessToken";
import { ICertificate } from "../models/Entity/ICertificate";

export const certificateAPI = createApi({
  reducerPath: "certificateAPI",
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

  tagTypes: ["Certificates"],
  endpoints: (build) => ({
    getCertificates: build.query<ICertificate[], {}>({
      query: () => ({
        url: `/certificates`,
        method: "GET",
      }),
      providesTags: (result) => ["Certificates"],
    }),
    postCertificate: build.mutation<ICertificate, { formData: FormData }>({
      query: ({ formData }) => ({
        url: `/certificates`,
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["Certificates"],
    }),
    putCertificate: build.mutation<
      ICertificate,
      { id: Number; formData: FormData }
    >({
      query: ({ id, formData }) => ({
        url: `/certificates/${id}`,
        method: "put",
        body: formData,
      }),
      invalidatesTags: ["Certificates"],
    }),
    deleteCertificate: build.mutation<ICertificate, { id: Number }>({
      query: ({ id }) => ({
        url: `/certificates/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Certificates"],
    }),
  }),
});
