import Link from 'next/link'
import { events } from '@/data/events'

export default function ForestEvents() {
  return (
    <section
      id="eventos"
      className="mb-12 sm:mb-16 py-12 sm:py-16 bg-verde-900"
    >
      <div className="container">
        <h1 className="uppercase text-verde-200 text-center tracking-widest mb-4 text-sm">
          conecte-se com a natureza
        </h1>
        <p className="mb-8 mx-auto font-serif text-balance text-center max-w-screen-md text-white text-4xl sm:text-6xl">
          Cada Som, Cada Momento, Uma Nova Descoberta
        </p>
        <div className="grid grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 sm:gap-8 pb-4 overflow-x-auto snap-x snap-mandatory">
          {events.map((event) => (
            <div
              className="grid gap-4 snap-center bg-verde-800 p-6 sm:p-8 rounded-xl"
              key={event.id}
            >
              <h2 className="text-verde-200">{event.title}</h2>

              <div className="text-white">
                <p className="font-serif text-5xl">{event.day}</p>
                <p className="text-xl">{event.month}</p>
              </div>
              <p className="text-gray-300 text-balance">{event.description}</p>

              <Link className="justify-self-start self-end btn" href="#contato">
                {event.reservation}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
