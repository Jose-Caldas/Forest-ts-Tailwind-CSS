import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Hosting from '@/components/Hosting'
import Widget from '@/components/Widget'

export default function Home() {
  return (
    <div className="container">
      <Widget />
      <Header />
      <Banner />
      <Hosting />
    </div>
  )
}
