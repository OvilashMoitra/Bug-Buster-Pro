"use client"
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import PriceSection from '@/components/ui/PriceSection'
import Stats from '@/components/ui/Stats'
import BlogCard from '@/components/ui/Blog/BlogCard'
import BlogDetails from '@/components/ui/Blog/BlogDetails'
import ContactCalltoAction from '@/shared/ContactCalltoAction/ContactCalltoAction'
import "./page.module.css"
import { Button } from 'antd'
import HomePageBanner from '@/components/ui/HomePageBanner'
import { useEffect } from 'react'
import { useGetAllStatsQuery, useUpdatePageViewQuery } from '@/redux/api/statsApi'
import FAQSection from '@/components/ui/FAQSection'
import { useGetAllBlogQuery } from '@/redux/api/blogApi'
import { IBlog } from './blog/page'
import Link from 'next/link'
import FeedbackForm from '@/components/ui/FeedbackForm'

export default function Home() {
  // !hook
  const { data: stats } = useUpdatePageViewQuery(undefined)
  const { data, isLoading } = useGetAllBlogQuery(undefined);
  console.log({ data });
  let blogs;
  console.log(data?.success);
  if (data?.success) {
    blogs = <div className=''>
      <div className="max-w-2xl text-center mx-auto py-20 ">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Read our latest news</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">We ve helped some great companies brand, design and get to market.</p>
      </div>

      <div className='flex justify-center gap-10 my-5'>
        {data.data?.slice(0, 6).map((blog: IBlog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>

      <div className="flex justify-center py-10">
        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600 dark:text-gray-400">
              Want to read more?
            </p>
            <Link className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="/blog">
              Go here
              <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  }
  return (
    <div className='bg-slate-900'>
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
      <Navbar />
      <HomePageBanner/>
      <Stats />
        <PriceSection />
        {blogs}
        <FAQSection />
        <Footer />
        <ContactCalltoAction />
        {/* <FeedbackForm/> */}
    </div>
    </div>
  )
}
