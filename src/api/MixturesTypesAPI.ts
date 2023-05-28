import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { getAccessToken } from "../utils/GetAccessToken";
import { IMixtureTypes } from "../models/Entity/IMixtureTypes";

export const mixturesTypesAPI = createApi({
  reducerPath: "mixturesTypesAPI",
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
  tagTypes: ["MixturesTypes"],
  endpoints: (build) => ({
    getMixturesTypes: build.query<IMixtureTypes[], {}>({
      query: () => ({
        url: `/mixture-types`,
        method: "GET",
      }),
      providesTags: (result) => ["MixturesTypes"],
    }),

    postMixtureType: build.mutation<IMixtureTypes, { formData: FormData }>({
      query: ({ formData }) => ({
        url: `/mixture-types`,
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["MixturesTypes"],
    }),
    putMixtureType: build.mutation<
      IMixtureTypes,
      { id: Number; formData: FormData }
    >({
      query: ({ id, formData }) => ({
        url: `/mixture-types/${id}`,
        method: "put",
        body: formData,
      }),
      invalidatesTags: ["MixturesTypes"],
    }),
    deleteMixtureType: build.mutation<IMixtureTypes, { id: Number }>({
      query: ({ id }) => ({
        url: `/mixture-types/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["MixturesTypes"],
    }),
  }),
});
