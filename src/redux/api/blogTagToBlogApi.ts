// import { bugBusterProApi } from "./api";

// const BlogTagToTag_URL = "/blogTag";

// export const blogApi = bugBusterProApi.injectEndpoints({
//     endpoints: (build) => ({
//         getBlogTagToTag: build.query({
//             query: (id) => ({
//                 url: `${BlogTagToTag_URL}/`,
//                 method: "GET",
//             }),
//             providesTags: ["blogTag"]
//         }),
//         updateBlog: build.mutation({
//             query: (payload) => ({
//                 url: `${BlogTagToTag_URL}/${payload.id}`,
//                 method: "PATCH",
//                 data: payload.data,
//             }),
//             invalidatesTags: ['blogTag']
//         }),

//     }),

// })

// export const {
//     useCreateBlogMutation,
//     useDeleteBlogMutation,
//     useGetAllBlogQuery,
//     useUpdateBlogMutation
// } = blogApi