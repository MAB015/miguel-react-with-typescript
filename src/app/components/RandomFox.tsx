// import type { FunctionComponent, FC } from "react"

import { useRef, useEffect, useState } from 'react'
import { ImgHTMLAttributes } from 'react'

// // Implicito
// export const RandomFox = () => {
//     return <img />
// }

// Crea un objeto tipo Props
type LazyImageProps = {
    src: string,
    onLazyLoad?: (( node: HTMLImageElement) => void)
}

type ImageNative = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNative

// Tipado a retorno de funcion
// STANDART FORM 
// - Calling the object Props as parameter and Destructuring the object
export const LazyImage = ( { src, onLazyLoad, ...imgProps }: Props  ): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)

    // Estado de imagen
    const [currentSrc, setCurrentSrc] = useState(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    )

    useEffect(() => {
      // Nuevo observador
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // onIntersection --> conole.log
                if (entry.isIntersecting) {
                    setCurrentSrc(src)
                    onLazyLoad && onLazyLoad(entry.target as HTMLImageElement)
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
    }, [src])
        

    
    // Retorma Imagen
    return <img 
                ref={node}
                src={ currentSrc }
                {...imgProps}
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