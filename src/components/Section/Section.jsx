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
          <Subtitle subtitle='Sua seleção especial' />
        </div>
        <Product />
        <Button text='Ainda mais produtos aqui!' />
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