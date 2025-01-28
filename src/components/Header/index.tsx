'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="flex items-center justify-between gap-8 py-8">
      <Link href="/">
        <Image
          src="/img/forest.svg"
          alt="Forest logo"
          width={138}
          height={35}
          priority
        />
      </Link>
      <nav
        id="mobile-menu"
        className={`lg:block ${
          menuOpen ? 'flex' : 'hidden'
        } items-center z-40 max-lg:fixed max-lg:w-full max-lg:inset-0`}
      >
        <div
          className="fixed lg:hidden inset-0 bg-verde-950/40 backdrop-blur-md"
          onClick={toggleMenu}
        ></div>

        <ul className="text-white text-2xl max-lg:divide-y-2 max-lg:divide-white/10 max-lg:z-50 max-lg:absolute max-lg:p-8 max-lg:w-full lg:text-xl lg:flex lg:flex-wrap lg:gap-8">
          <li className="animate-slide-in opacity-0 animate-delay-1">
            <Link
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#acomodacoes"
              onClick={toggleMenu}
            >
              Acomodações
            </Link>
          </li>
          <li className="animate-slide-in opacity-0 animate-delay-2">
            <Link
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#eventos"
              onClick={toggleMenu}
            >
              Eventos
            </Link>
          </li>
          <li className="animate-slide-in opacity-0 animate-delay-3">
            <Link
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#esperiencias"
              onClick={toggleMenu}
            >
              Experiências
            </Link>
          </li>
          <li className="animate-slide-in opacity-0 animate-delay-4">
            <Link
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#contato"
              onClick={toggleMenu}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <button
        id="mobile-button"
        className="btn flex items-center gap-3 text-verde-900 py-1 rounded-full lg:hidden"
        onClick={toggleMenu}
      >
        Menu
        <span className="h-3 w-4 flex flex-col justify-between *:h-0.5 *:rounded-md *:bg-verde-800">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </header>
  )
}
