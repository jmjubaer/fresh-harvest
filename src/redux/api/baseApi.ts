import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: `http://23.239.111.164:5001/api/v1`,
    credentials: "include",
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery,
    endpoints: () => ({}),
    tagTypes: [],
});
