import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Product from '../Product/Product'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'

const Section = () => {
  return (
    <>
       <Subtitle subtitle='Sua seleção especial'/>
       <Product/>
       <Button text='Ainda mais produtos aqui!'/>

       <Subtitle subtitle='Compartilhe a novidade'/>
       <Text text='Quer que seus amigos também ganhem a lista 
       personalizada deles? Preencha agora!' />

       <Label text='Nome do seu amigo:'/>
       <Input type='text'/>

       <Label text='E-mail:'/>
       <Input type='email'/>

       <Button text='Enviar agora'/>
    </>
  )
}

export default Section