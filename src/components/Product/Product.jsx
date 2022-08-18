import React from 'react'
import style from './Product.module.css'

const Product = ({name,description,price, currentPrice, parcel, installmentePrice}) => {
  return (
    <div className={style.product}>
        <picture className={style.picture}>
            <div></div>
        </picture>
        <p className={style.name}>{name}</p>
        <p className={style.description}>{description}</p>
        <p className={style.description}>De: R${price}</p>
        <p className={style.currentPrice}>Por:R${currentPrice}</p>
        <p className={style.description}>ou {parcel} de R${installmentePrice}</p>

        <button className={style.button}>Comprar</button>
    </div>
  )
}

export default Product