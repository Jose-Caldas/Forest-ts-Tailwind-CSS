import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Hosting from '@/components/Hosting'
import ForestWidget from '@/components/ForestWidget'
import ForestEvents from '@/components/ForestEvents'
import Experiences from '@/components/Experiences'
import NaturalCycle from '@/components/NaturalCycle'
import Contacts from '@/components/Contacts'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <ForestWidget />
      <Header />
      <Banner />
      <Hosting />
      <ForestEvents />
      <Experiences />
      <NaturalCycle />
      <Contacts />
      <Partners />
      <Footer />
    </div>
  )
}
