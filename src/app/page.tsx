import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Hosting from '@/components/Hosting'
import ForestWidget from '@/components/ForestWidget'
import ForestEvents from '@/components/ForestEvents'
import Experiences from '@/components/Experiences'
import NaturalCycle from '@/components/NaturalCycle'
import Contacts from '@/components/Contacts'

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
    </div>
  )
}
