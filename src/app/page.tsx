"use client"; // this is a client component 👈🏽

import { useState } from 'react'
import { MouseEventHandler } from 'react'
import { Inter } from 'next/font/google'
import { LazyImage  } from './components/RandomFox'
import { random } from 'Lodash'

const inter = Inter({ subsets: ['latin'] })

// Generate a random function
const myRandom = () => random(1, 123)

// Generate Unique Id's
const generateId = () => Math.random().toString(36).substring(2,9)

export default function Home() {
  // Creando un estado de imagenes cambiando el tipo generico a un array de string
  // Agregando tips al hook de react
  const [images, setImages] = useState<Array<IImageItem>>([])

  // Adding the type MouseEventHandler to have the exact type of the events
  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    const target = event.target

    // Generating the Image
    const newImageItem: IImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`,
    }

    // Changing the status of the Image
    setImages([
      ...images,
      newImageItem
    ])
    window.plausible("add_Fox")
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      {/* // Button to change a fox everytime */}
      <button onClick={addNewFox}>Add new Fox</button>


      {/* Ciclamos a travez de imagenes colocando nuestro componente con la imagen a la que corresponde */}
      { images.map(({id, url}) => (
        <div key={id} className="p-4">
          {/* Crea URL de imagen */}
          <LazyImage
            src={url}
            width={320}
            height="auto"
            className="rounded bg-gray-300"
            title="Random Fox"
            onClick={()=> console.log("Hola")}
          />
        </div>
      )) }
    </main>
  )
}