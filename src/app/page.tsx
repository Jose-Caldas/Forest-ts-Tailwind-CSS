import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Hosting from '@/components/Hosting'
import ForestWidget from '@/components/ForestWidget'
import ForestEvents from '@/components/ForestEvents'

export default function Home() {
  return (
    <div>
      <div className="container">
        <ForestWidget />
        <Header />
        <Banner />
        <Hosting />
      </div>
      <ForestEvents />
    </div>
  )
}
