import Image from 'next/image'

export default function Partners() {
  return (
    <section className="container mb-12 sm:mb-16 ">
      <h1 className="text-verde-200 mb-2 font-serif text-sm tracking-widest">
        Nossos Parceiros
      </h1>
      <ul className="flex flex-col items-center justify-center py-4 max-sm:divide-y-2 max-sm:divide-verde-900 *:p-4 sm:flex-row sm:gap-8 sm:border-y-2 sm:border-verde-900 sm:py-8 *:*:max-h-8">
        <li>
          <Image
            className="size-full"
            src="./img/parceiros/caravan.svg"
            alt="Caravan"
            width={0}
            height={0}
            sizes="100vh"
          />
        </li>
        <li>
          <Image
            className="size-full"
            src="./img/parceiros/dogs.svg"
            alt="Dogs"
            width={0}
            height={0}
            sizes="100vh"
          />
        </li>
        <li>
          <Image
            className="size-full"
            src="./img/parceiros/wildbeast.svg"
            alt="Wildbeast"
            width={0}
            height={0}
            sizes="100vh"
          />
        </li>
        <li>
          <Image
            className="size-full"
            src="./img/parceiros/lescone.svg"
            alt="Lescone"
            width={0}
            height={0}
            sizes="100vh"
          />
        </li>
        <li>
          <Image
            className="size-full"
            src="./img/parceiros/surfbot.svg"
            alt="Surfbot"
            width={0}
            height={0}
            sizes="100vh"
          />
        </li>
      </ul>
    </section>
  )
}
