'use client'

import Image from 'next/image'

import { useEffect, useState } from 'react'
import { random } from '../utils/randomTemperature'

export default function Banner() {
  const [videoSrc, setVideoSrc] = useState('./img/video_sol.mp4')

  useEffect(() => {
    if (random < 25) {
      setVideoSrc('./img/video_chuva.mp4')
    }
  }, [])

  return (
    <section>
      <div className="relative px-8 pb-8 pt-64 bg-gradient-to-t from-verde-950/80 text-white rounded-2xl overflow-hidden max-sm:px-4 max-sm:pt-12">
        <video
          id="video"
          className="absolute inset-0 size-full object-cover -z-10 animate-fade-in"
          muted
          autoPlay
          playsInline
          loop
          width="1280"
          height="720"
          src={videoSrc}
        ></video>
        <div className="bg-verde-950/60 rounded-xl flex flex-col items-start gap-2 p-4 mb-8 sm:gap-8 sm:items-center sm:py-1 sm:pl-4 sm:pr-1 sm:bg-verde-950 sm:inline-flex sm:flex-row sm:rounded-full">
          vagas para dezembro abertas
          <a className="btn inline-flex items-center gap-2" href="#contato">
            Reserve Hoje
            <Image
              src={`./img/seta.svg`}
              alt=""
              width={6}
              height={10}
              priority
            ></Image>
          </a>
        </div>
        <h1 className="mb-8 font-serif text-balance max-w-screen-sm text-4xl sm:mb-20 sm:text-5xl">
          Venha Experimentar a Vida na Floresta
        </h1>
        <div className="text-sm sm:flex justify-between items-end">
          <p className="max-sm:mb-4">
            Melhores locais para visitar
            <a
              className="underline decoration-2 underline-offset-4 hover:no-underline"
              href="./"
            >
              2049
            </a>
          </p>
          <div>
            <p className="uppercase mb-2">Recomendado por</p>
            <p className="flex items-center gap-4">
              <Image
                className="w-[112px] h-[19.42px]"
                src="./img/parceiros/wildbeast.svg"
                alt="Wildbeast"
                width={0}
                height={0}
                sizes="100vh"
                priority
              ></Image>
              <span>|</span>
              Revista Nacional
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
