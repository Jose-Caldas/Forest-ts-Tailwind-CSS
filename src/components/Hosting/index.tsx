import Image from 'next/image'

export default function Hosting() {
  return (
    <section
      id="acomodacoes"
      className="container radial-gradient grid lg:grid-cols-[2fr_3fr] gap-8 pt-16 mb-12 sm:mb-16"
    >
      <div className="content-end bg-hosting">
        <h2 className="text-white mb-8 text-4xl font-serif lg:text-5xl">
          Refúgio Natural
        </h2>
        <ul className="text-gray-200 *:flex *:items-center *:gap-4 grid gap-4 sm:text-xl">
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Experimente a
            natureza de perto
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Conecte-se com
            a natureza
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Desconecte-se
            do digital
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Observe a vida
            selvagem
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Escolha a sua
            cabine preferida
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-4 sm:gap-8">
        <div className="col-span-full grid *:col-start-1 *:row-start-1">
          <Image
            className="h-52 w-full object-cover rounded-xl"
            src="/img/casa1.jpg"
            alt="Casa 1"
            width={0}
            height={0}
            sizes="100vh"
            priority
          />
          <span className="m-2 self-start justify-self-end uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
            Ruby
          </span>
        </div>
        <div className="grid *:col-start-1 *:row-start-1">
          <Image
            className="size-full object-cover rounded-xl"
            src="/img/casa2.jpg"
            alt="Casa 2"
            width={0}
            height={0}
            sizes="100vh"
            priority
          />
          <span className="m-2 self-start justify-self-end uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
            Emerald
          </span>
        </div>
        <div className="grid *:col-start-1 *:row-start-1">
          <Image
            className="size-full object-cover rounded-xl"
            src="/img/casa3.jpg"
            alt="Casa 3"
            height={0}
            width={0}
            sizes="100vh"
            priority
          />
          <span className="m-2 self-start justify-self-end uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
            Saphire
          </span>
        </div>
      </div>
    </section>
  )
}
