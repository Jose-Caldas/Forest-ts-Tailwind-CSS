import Link from 'next/link'

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
          <div className="grid gap-4 snap-center bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h2 className="text-verde-400">Lua Nova</h2>
            <div className="text-white">
              <p className="font-serif text-5xl">23</p>
              <p className="text-xl">Março 2049</p>
            </div>
            <p className="text-gray-300 text-balance">
              Melhor período para observação astronômica. O Céu estará claro e
              as estrelas visíveis.
            </p>
            <Link className="justify-self-start self-end btn" href="#contato">
              Reservar 23/03
            </Link>
          </div>
          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h2 className="text-verde-400">Aurora Boreal</h2>
            <div className="text-white">
              <p className="font-serif text-5xl">15</p>
              <p className="text-xl">Abril 2049</p>
            </div>
            <p className="text-gray-300 text-balance">
              Melhor período para observação da Aurora Boreal, o céu estará
              iluminado pelas estrelas.
            </p>
            <Link className="justify-self-start self-end btn" href="#contato">
              Reservar 15/04
            </Link>
          </div>
          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h2 className="text-verde-400">Chuva de Meteoros</h2>
            <div className="text-white">
              <p className="font-serif text-5xl">18</p>
              <p className="text-xl">Agosto 2049</p>
            </div>
            <p className="text-gray-300 text-balance">
              Melhor período para observação da Chuva de Meteoros, o céu estará
              iluminado pelas estrelas.
            </p>
            <Link className="justify-self-start self-end btn" href="#contato">
              Reservar 18/08
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
