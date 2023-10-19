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

export default function Home() {
  // !hook
  const {data}=useUpdatePageViewQuery(undefined)
  return (
    <div className='bg-slate-900'>
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
      <Navbar />
      <HomePageBanner/>
      <Stats />
      <PriceSection />
      <Footer />
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <ContactCalltoAction/>
    </div>
    </div>
  )
}
