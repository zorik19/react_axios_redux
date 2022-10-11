import React, {useState} from 'react'
import {IProduct} from "../gitModels";

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]
    return (
        <div
        className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p> {product.title} </p>
            <p className="font-bold">Цена: {product.price}</p>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                { details ? 'Скрыть' : 'Подробности'}
            </button>

            { details && <div>
                <p>{product.description}</p>
                <p>Рейтинг: <span style={{ fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
            </div>}

            {/*<p>{product.category}</p>*/}
        </div>
    )
}