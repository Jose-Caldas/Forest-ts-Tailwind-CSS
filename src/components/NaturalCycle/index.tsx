import Image from 'next/image'

export default function NaturalCycle() {
  return (
    <section className="container bg-hosting  bg-contain bg-center bg-no-repeat mb-12 sm:mb-16 sm:py-16">
      <p className="mb-4 text-center text-verde-200 uppercase tracking-widest text-sm">
        Ciclo Natural
      </p>
      <h2 className="mb-8 mx-auto font-serif text-balance text-center max-w-screen-md text-white text-4xl sm:text-6xl">
        Ritmo da Floresta
      </h2>

      <div className="flex flex-col gap-4 md:flex-row sm:gap-8">
        <div className="grid flex-1 gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl transition-transform sm:hover:-translate-y-2">
          <div className="neon size-10 flex items-center justify-center">
            <Image
              className="size-6"
              src="/img/manha.svg"
              alt=""
              width={0}
              height={0}
              priority
            />
          </div>
          <h3 className="font-serif text-2xl text-white">Amanhecer</h3>
          <p className="text-gray-400">
            Desperte com o canto dos pássaros e participe das nossas caminhadas
            ao ar livre.
          </p>
          <span className="text-verde-300">05:40 - 07:00</span>
        </div>
        <div className="grid flex-1 gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl transition-transform sm:translate-y-12 sm:hover:translate-y-10">
          <div className="neon size-10 flex items-center justify-center">
            <Image
              className="size-6"
              src="/img/dia.svg"
              alt=""
              width={0}
              height={0}
              priority
            />
          </div>
          <h3 className="font-serif text-2xl text-white">Meio-dia</h3>
          <p className="text-gray-400">
            Explore nossas trilhas sombreadas e desfrute de um piquenique
            gourmet na natureza.
          </p>
          <span className="text-verde-300">12:00 - 14:00</span>
        </div>
        <div className="grid flex-1 gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl transition-transform sm:hover:-translate-y-2">
          <div className="neon size-10 flex items-center justify-center">
            <Image
              className="size-6"
              src="/img/noite.svg"
              alt=""
              width={0}
              height={0}
              priority
            />
          </div>
          <h3 className="font-serif text-2xl text-white">Anoitecer</h3>
          <p className="text-gray-400">
            Termine seu dia com nossa sessão de observação de estrelas.
          </p>
          <span className="text-verde-300">19:00 - 21:00</span>
        </div>
      </div>
    </section>
  )
}
