import "./card.css"

interface CardProps{
    price: number,
    name: string,
    image: string
}

export function Card({ price, image, name }: CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2><b>{name}</b></h2>
            <p><b>Valor: {price}</b></p>
        </div>
    )
}