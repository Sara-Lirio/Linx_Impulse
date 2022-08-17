import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'

const Form = () => {
  return (
    <div>
        <Label text='Seu nome:'/>
        <Input type='text'/>

        <Label text='E-mail:'/>
        <Input type='email'/>

        <Label text='CPF:'/>
        <Input type='text'/>

        <Input type='radio'/>
        <Label text='Masculino'/>

        <Input type='radio'/>
        <Label text='Feminino'/>

        <Button text='Enviar'/>
    </div>
  )
}

export default Form