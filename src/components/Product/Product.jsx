import React from 'react'
import style from './Product.module.css'

const Product = ({products}) => {
  return (
    <>
      {/* {products.map(product => {
          return (
            <div key={product.id} className={style.product}>
              <picture className={style.picture}>
                <img src={product.image} alt='product' />
              </picture>
              <p className={style.name}>{product.name}</p>
              <p className={style.description}>{product.description}</p>
              <p className={style.description}>De: R$ {product.oldPrice},00</p>
              <p className={style.currentPrice}>Por: R$ {product.price},00</p>
              <p className={style.description}>ou {product.installments.count} de R$ {product.installments.value}</p>

              <button className={style.button}>Comprar</button>
            </div>
          )
        })
      } */}
    </>
  )
}

export default Product