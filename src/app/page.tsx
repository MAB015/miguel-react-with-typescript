"use client"; // this is a client component 👈🏽

import { useState } from 'react'
import { Inter } from 'next/font/google'
import { RandomFox  } from './components/RandomFox'

const inter = Inter({ subsets: ['latin'] })

// Generate a random function
const random = () => Math.floor(Math.random() * 123) + 1

type ImageItem = {id: string; url: string}

// Generate Unique Id's
const generateId = () => Math.random().toString(36).substring(2,9)

export default function Home() {
  // Creando un estado de imagenes cambiando el tipo generico a un array de string
  // Agregando tips al hook de react
  const [images, setImages] = useState<Array<ImageItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ])

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      {/* Ciclamos a travez de imagenes colocando nuestro componente con la imagen a la que corresponde */}
      { images.map(({id, url}) => (
        <div key={id} className="p-4">
          {/* Crea URL de imagen */}
          <RandomFox image={url} />
        </div>
      )) }
    </main>
  )
}
