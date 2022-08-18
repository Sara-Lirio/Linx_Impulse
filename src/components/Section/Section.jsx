import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Product from '../Product/Product'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import style from './Section.module.css'

const Section = () => {
  return (
    <>
      <section className={style.section}>
        <div className={style.title}>
          <div className={style.subtitle}>
            <Subtitle subtitle='Sua seleção especial' />
          </div>
        </div>
        <section className={style.products}>
          <Product name='Nome do Produto' description='Descrição do produto 
        um pouco maior, com duas linhas ou três que explica melhor do que se trata.'
            price='23,99' currentPrice='19,99' parcel='2x' installmentePrice='9,99' />
          <Product name='Nome do Produto' description='Descrição do produto 
        um pouco maior, com duas linhas ou três que explica melhor do que se trata.'
            price='23,99' currentPrice='19,99' parcel='2x' installmentePrice='9,99' />
          <Product name='Nome do Produto' description='Descrição do produto 
        um pouco maior, com duas linhas ou três que explica melhor do que se trata.'
            price='23,99' currentPrice='19,99' parcel='2x' installmentePrice='9,99' />
          <Product name='Nome do Produto' description='Descrição do produto 
        um pouco maior, com duas linhas ou três que explica melhor do que se trata.'
            price='23,99' currentPrice='19,99' parcel='2x' installmentePrice='9,99' />
        </section>
        <div className={style.buttonSection}>
          <Button text='Ainda mais produtos aqui!' />
        </div>
      </section>


      <section className={style.share}>
        <div className={style.title}>
          <Subtitle subtitle='Compartilhe a novidade' />
        </div>
        <Text text='Quer que seus amigos também ganhem a lista 
       personalizada deles? Preencha agora!' />
        <form className={style.forms}>
          <div className={style.name}>
            <Label text='Nome do seu amigo:' />
            <Input type='text' />
          </div>
          <div className={style.email}>
            <Label text='E-mail:' />
            <Input type='email' />
          </div>
        </form>

        <Button text='Enviar agora' />
      </section>
    </>
  )
}

export default Section