'use client'

import Image from 'next/image'

function handleScrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="container pb-8 ">
      <div className="grid lg:grid-cols-2 gap-8 bg-verde-900 rounded-2xl p-6 sm:p-12 mb-8">
        <div className="grid sm:grid-cols-[1fr_2fr] gap-8">
          <div>
            <h1 className="text-white font-serif text-xl mb-4">Endereço</h1>
            <div className="flex flex-col *:text-gray-400">
              <span>Rua da Mata, 123</span>
              <span>Foresta Nacional</span>
              <span>Rio de Janeiro - RJ</span>
            </div>
          </div>
          <div>
            <h1 className="text-white font-serif text-xl mb-4">Contato</h1>
            <div className="flex flex-col *:text-gray-400">
              <span>contato@forest.com</span>
              <span>+55 21 9999-9999</span>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:justify-self-end">
            <Image
              className="w-[138px] h-[35px] mb-4"
              src="./img/forest.svg"
              alt="Forest"
              width={0}
              height={0}
              sizes="100vh"
            />
            <p className="text-gray-400">Conecte-se com a natureza</p>
          </div>
        </div>
      </div>
      <div className="text-gray-400 flex items-center justify-between gap-8 text-sm max-sm:flex-col-reverse">
        <p>© 2024 Forest. Todos os direitos reservados.</p>
        <ul className="flex gap-8">
          <li>
            <a className="hover:text-verde-300" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a className="hover:text-verde-300" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="hover:text-verde-300" href="#">
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <div className="container flex justify-end mt-8">
        <button
          className="bg-verde-950/10 text-verde-300 rounded-md py-2 px-4 hover:bg-verde-700 hover:scale-110 transition-transform"
          onClick={handleScrollTop}
        >
          <span className="text-xl">↑</span> Top
        </button>
      </div>
    </footer>
  )
}
