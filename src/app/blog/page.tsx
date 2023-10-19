"use client"
import BlogCard from "@/components/ui/Blog/BlogCard";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { useGetAllBlogQuery } from "@/redux/api/blogApi";

export type IBlogTag={
    "id": string,
    "createdAt": Date,
    "updatedAt": Date,
    "blogId": string,
    "tagId": string,
    "tag": {
        "id": string,
        "createdAt": Date,
        "updatedAt": Date,
        "tagName": string
    }
}

export type IBlog={
    "id": string,
    "createdAt": Date,
    "updatedAt": Date,
    "blogTitle": string,
    "blogImage": string,
    "blogContent": string,
    "addedBy": string,
    "tags": IBlogTag[]
}

export default function Home() {
    const { data, isLoading } = useGetAllBlogQuery(undefined);
    console.log({ data });
    let blogs;
    console.log(data?.success);
    if (data?.success) {
        blogs = data.data?.map((blog:IBlog)=><BlogCard key={blog.id} blog={blog}/>)
    }
  return (
    <div className='bg-slate-900'>
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
              <Navbar />
              <div className="flex px-10 justify-center py-5 gap-5">
              {blogs}
              </div>
              

      <Footer/>
    </div>
    </div>
  )
}
