import React from 'react'
import Button from '../Button/Button'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import Title from '../Title/Title'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <Subtitle subtitle='uma seleção de produtos' />
      <Title title='especial para você' />
      <Text text='Todos os produtos desta lista foram selecionados a partir de sua navegação. Aproveite!'/>
      
      <div className={style.buttons}>
        <Button text='Conheça a Linx'></Button>
        <Button text='Ajude o algorítimo'></Button>
        <Button text='Seus produtos'></Button>
        <Button text='Compartilhe'></Button>
      </div>
      <div className={style.triangulediv}>
        <div className={style.triangule}></div>
      </div>
    
    </header>
  )
}

export default Header