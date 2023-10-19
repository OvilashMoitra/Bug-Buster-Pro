import { bugBusterProApi } from "./api";

const User_URL = "/user";

export const userApi = bugBusterProApi.injectEndpoints({
    endpoints: (build) => ({
        createUser: build.mutation({
            query: (userData) => ({
                url: `${User_URL}/create-user`,
                method: "POST",
                data: userData,
            }),
            invalidatesTags: ['user']
        }),
        getAllUsers: build.query({
            query: () => ({
                url: `${User_URL}/`,
                method: "GET",
            }),
            providesTags: ["user"]
        }),
        getUserProfile: build.query({
            query: (id) => ({
                url: `${User_URL}/${id}`,
                method: "GET",
            }),
            providesTags: ["user"]
        }),
        updateUserProfile: build.mutation({
            query: (payload) => ({
                url: `${User_URL}/${payload.id}`,
                method: "PATCH",
                data: payload.data,
            }),
            invalidatesTags: ['user']
        }),
    }),
});

export const {
    useCreateUserMutation,
    useGetAllUsersQuery,
    useUpdateUserProfileMutation,
    useGetUserProfileQuery
} = userApi;
