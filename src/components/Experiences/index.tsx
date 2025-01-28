import Image from 'next/image'

export default function Experiences() {
  return (
    <section
      className="container mb-12 sm:mb-16 grid sm:grid-cols-2 gap-8"
      id="experiencias"
    >
      <div className="bg-verde-900 p-6 sm:p-8 rounded-xl">
        <p className="mb-4 text-verde-200 tracking-widest text-sm uppercase">
          Experiências Exclusivas
        </p>
        <h2 className="capitalize mb-8 font-serif text-balance text-white text-3xl sm:text-4xl lg:text-5xl">
          Escolha sua próxima aventura
        </h2>
        <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:neon hover:before:w-10 before:transition-[width]">
          Observação Noturna
        </h3>
        <p className="mb-8 text-gray-400 pl-10">
          Explore a vida selvagem em seu habitat natural sob as estrelas.
        </p>
        <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:neon hover:before:w-10 before:transition-[width]">
          Vida Selvagem
        </h3>
        <p className="mb-8 text-balance text-gray-400 pl-10">
          Observe a vida selvagem em seu habitat natural.
        </p>
        <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:neon hover:before:w-10 before:transition-[width]">
          Canoagem
        </h3>
        <p className="mb-8 text-balance text-gray-400 pl-10">
          Conquiste novos horizontes com nossa equipe especializada.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="group relative  overflow-hidden rounded-xl">
          <Image
            className="size-full object-cover transition-transform group-hover:scale-110"
            src="/img/canoagem.jpg"
            alt="canoagem"
            width={0}
            height={0}
            sizes="100vh"
            priority
          />
          <div className="absolute flex items-end p-4 inset-0 bg-gradient-to-t from-verde-950/80 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white">Canoagem</span>
          </div>
        </div>
        <div className="group row-span-2 relative overflow-hidden rounded-xl">
          <Image
            className="size-full object-cover transition-transform group-hover:scale-110"
            src="/img/observacao-noturna.jpg"
            alt="Observação Noturna"
            width={0}
            height={0}
            sizes="100vh"
            priority
          />
          <div className="absolute flex items-end p-4 inset-0 bg-gradient-to-t from-verde-950/80 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-white">Observação Noturna</span>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl">
          <Image
            className="size-full object-cover transition-transform group-hover:scale-110"
            src="/img/vida-selvagem.jpg"
            alt="Vida Selvagem"
            width={0}
            height={0}
            sizes="100vh"
            priority
          />
          <div className="absolute flex items-end p-4 inset-0 bg-gradient-to-t from-verde-950/80 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-white">Vida Selvagem</span>
          </div>
        </div>
      </div>
    </section>
  )
}
