'use client'

import { useEffect, useState } from 'react'

interface WeatherProps {
  day: string
  temperature: string
  weatherIcon: string
}

export default function Widget() {
  const [weather, setWeather] = useState<WeatherProps>({
    day: '',
    temperature: '',
    weatherIcon: '',
  })

  useEffect(() => {
    const random = Math.floor(Math.random() * 10) + 20
    const date = new Date()
    const day = date
      .toLocaleDateString('pt-BR', {
        weekday: 'long',
      })
      .replace('-feira', '')

    const weatherData = {
      day: day,
      temperature: `${random}°`,
      weatherIcon: random < 25 ? `🌧️ ${random + 15}%` : `🌤️`,
    }

    setWeather(weatherData)
  }, [])

  return (
    <div className="container mt-4 flex justify-center md:justify-start">
      <div className="inline-flex items-center rounded-md bg-verde-900">
        <span className="neon size-2 block relative -left-1"></span>
        <div className="flex text-verde-300 divide-x-2 divide-verde-800">
          <div className="px-4 py-2 capitalize">{weather.day}</div>
          <div className="px-4 py-2">{weather.temperature}</div>
          <div className="px-4 py-2">{weather.weatherIcon}</div>
        </div>
      </div>
    </div>
  )
}
