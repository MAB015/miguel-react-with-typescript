
// import type { FunctionComponent, FC } from "react"

// // Implicito
// export const RandomFox = () => {
//     return <img />
// }



// Generate a random function
const random = () => Math.floor(Math.random() * 123) + 1;

// Tipado a retorno de funcion
// STANDART
export const RandomFox = (): JSX.Element => {
    // Crea URL de imagen
    const image: string = `https://randomfox.ca/images/${random()}.jpg`;
    // Retorma Imagen
    return <img 
                width={320}
                height="auto"
                src={image}
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