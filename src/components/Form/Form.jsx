import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import InputRadio from '../Input/InputRadio'
import Label from '../Label/Label'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import style from './Form.module.css'

const Form = () => {
  return (
    <section className={style.section}>
      <article className={style.article}>
        <Subtitle subtitle='Ajude o algorítimo a ser mais certeiro' />
        <Text text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu 
        urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper 
        pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis 
        ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean 
        lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad 
        litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum 
        vel urna tortor. Vivamus et arcu non felis tristique eleifend.' />
        <Text text=' Morbi eu condimentum urna. Curabitur eu magna eget turpis 
        condimentum ultrices. 
        Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam 
        ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat 
        velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean 
        sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante 
        suscipit libero, at mattis augue est vel metus.'/>
      </article>

      <form className={style.forms}>
      <div className={style.divform}>
        <Label text='Seu nome:' />
        <Input type='text' />

        <Label text='E-mail:' />
        <Input type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' />

        <Label text='CPF:' />
        <Input type='text' pattern='^[0-9]{11}$'/>
      </div>
        <div className={style.radio}>
          <InputRadio />
          <Label text='Masculino' />
          
          <InputRadio/>
          <Label text='Feminino' />
        </div>

        <Button text='Enviar' />
      </form>
    </section>
  )
}

export default Form