import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { getAccessToken } from "../utils/GetAccessToken";
import { IReviews } from "../models/Entity/IReviews";

interface IReviewsResponse {
  count: number;
  rows: IReviews[];
}

interface IReviewQuery {
  limit: number;
  page: number;
  isNotOnlyPublished?: boolean;
}

export const reviewsAPI = createApi({
  reducerPath: "reviewsAPI",
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
  tagTypes: ["Reviews"],
  endpoints: (build) => ({
    getReviews: build.query<IReviewsResponse, IReviewQuery>({
      query: ({ limit, page, isNotOnlyPublished }) => ({
        url: `/reviews`,
        method: "GET",
        params: { limit, page, isNotOnlyPublished },
      }),
      providesTags: (result) => ["Reviews"],
    }),

    postReviews: build.mutation<IReviews, { formData: FormData }>({
      query: ({ formData }) => ({
        url: `/reviews`,
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["Reviews"],
    }),
    putReviews: build.mutation<IReviews, { id: Number; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/reviews/${id}`,
        method: "put",
        body: formData,
      }),
      invalidatesTags: ["Reviews"],
    }),
    deleteReviews: build.mutation<IReviews, { id: Number }>({
      query: ({ id }) => ({
        url: `/reviews/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
});
