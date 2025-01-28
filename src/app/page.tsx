import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Hosting from '@/components/Hosting'
import ForestWidget from '@/components/ForestWidget'
import ForestEvents from '@/components/ForestEvents'
import Experiences from '@/components/Experiences'

export default function Home() {
  return (
    <div>
      <ForestWidget />
      <Header />
      <Banner />
      <Hosting />
      <ForestEvents />
      <Experiences />
    </div>
  )
}
