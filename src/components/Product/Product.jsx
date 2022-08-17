import React from 'react'
import Button from '../Button/Button'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'

const Product = () => {
  return (
    <div>
        <picture>

        </picture>
        <Subtitle subtitle='Nome do Produto'/>
        <Text text='Descrição do produto um pouco maior, 
        com duas linhas ou três que explica melhor do que se trata.'/>
        
        <Button text='Comprar'/>
    </div>
  )
}

export default Product