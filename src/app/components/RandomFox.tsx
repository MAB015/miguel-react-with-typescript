// import type { FunctionComponent, FC } from "react"

import { useRef, useEffect, useState } from 'react'

// // Implicito
// export const RandomFox = () => {
//     return <img />
// }

// Crea un objeto tipo Props
type Props = { image: string }


// Tipado a retorno de funcion
// STANDART FORM 
// - Calling the object Props as parameter and Destructuring the object
export const RandomFox = ( { image }: Props ): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)

    // Estado de imagen
    const [src, setsrc] = useState(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    )

    useEffect(() => {
      // Nuevo observador
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // onIntersection --> conole.log
                if (entry.isIntersecting) {
                    setsrc(image)
                }
            })
        })
        // Observe node
        if(node.current){
            observer.observe(node.current);
        }

        // Deconnect
        return () => {
            observer.disconnect()
        }
    }, [image])
        

    
    // Retorma Imagen
    return <img 
                width={320}
                height="auto"
                src={ src }
                className="rounded bg-gray-300"
                alt="Fox Random"
                ref={node}
            />
}
// {"image":"https:\/\/randomfox.ca\/images\/68.jpg","link":"https:\/\/randomfox.ca\/?i=68"}




// // Tipado a constante con FunctionComponent
// export const RandomFox3: FunctionComponent = () => {
//     return <img />
// }

// // Tipado a constante con FC
// export const RandomFox4: FC = () => {
//     return <img />
// }