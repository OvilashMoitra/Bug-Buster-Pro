import { bugBusterProApi } from "./api";

const Stats_URL = "/stats";

export const statsApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        getAllStats: build.query({
            query: () => ({
                url: `${Stats_URL}/`,
                method: "GET",
            }),
            providesTags: ["stats"]
        }),
    }),

})

export const {
    useGetAllStatsQuery
} = statsApi