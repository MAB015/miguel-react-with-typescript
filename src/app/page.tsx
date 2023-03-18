import { Inter } from 'next/font/google'
import { RandomFox  } from './components/RandomFox'

const inter = Inter({ subsets: ['latin'] })

// Generate a random function
const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      
      {/* Crea URL de imagen */}
      <RandomFox image={ `https://randomfox.ca/images/${random()}.jpg`} />
    </main>
  )
}
