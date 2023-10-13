import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import PriceSection from '@/components/ui/PriceSection'
import Stats from '@/components/ui/Stats'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <PriceSection />
      <Stats />
      <Footer />
    </>
  )
}
