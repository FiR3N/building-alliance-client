import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { getAccessToken } from "../utils/GetAccessToken";
import { IMixture } from "../models/Entity/IMixture";

export const mixturesAPI = createApi({
  reducerPath: "mixturesAPI",
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
  tagTypes: ["Mixtures"],
  endpoints: (build) => ({
    getMixturesByTypeId: build.query<IMixture[], { typeId: number | null }>({
      query: ({ typeId }) => ({
        url: `/mixtures/${typeId}`,
        method: "GET",
      }),
      providesTags: (result) => ["Mixtures"],
    }),

    postMixture: build.mutation<IMixture, { formData: FormData }>({
      query: ({ formData }) => ({
        url: `/mixtures`,
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["Mixtures"],
    }),
    putMixture: build.mutation<IMixture, { id: Number; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/mixtures/${id}`,
        method: "put",
        body: formData,
      }),
      invalidatesTags: ["Mixtures"],
    }),
    deleteMixture: build.mutation<IMixture, { id: Number }>({
      query: ({ id }) => ({
        url: `/mixtures/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Mixtures"],
    }),
  }),
});
