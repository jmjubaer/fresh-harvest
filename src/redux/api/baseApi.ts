import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: `https://code-commando.com/api/v1`,
    credentials: "include",
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery,
    endpoints: () => ({}),
    tagTypes: [],
});
