
// import type { FunctionComponent, FC } from "react"

// // Implicito
// export const RandomFox = () => {
//     return <img />
// }

// Crea un objeto tipo Props
type Props = { image: string };


// Tipado a retorno de funcion
// STANDART FORM 
// - Calling the object Props as parameter and Destructuring the object
export const RandomFox = ( { image }: Props ): JSX.Element => {
    // Retorma Imagen
    return <img 
                width={320}
                height="auto"
                src={ image }
                className="rounded"
                alt="Fox Random"
            />;
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