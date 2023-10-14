import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import PriceSection from '@/components/ui/PriceSection'
import Stats from '@/components/ui/Stats'
import BlogCard from '@/components/ui/Blog/BlogCard'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar />
      {/* <Header /> */}
      <PriceSection />
      <Stats />
      <div className='grid grid-cols-4 gap-5 px-5'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <Footer />
    </div>
  )
}
