import React from 'react'
import ButtonHeader from '../Button/ButtonHeader'
import Subtitle from '../Subtitle/Subtitle'
import Title from '../Title/Title'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <Subtitle subtitle='uma seleção de produtos' />
      <Title title='especial para você' />
      <p className={style.text}>Todos os produtos desta lista foram selecionados a partir de sua navegação. Aproveite!</p>
      
      <div className={style.buttons}>
        <ButtonHeader text='Conheça a Linx'/>
        <ButtonHeader text='Ajude o algorítimo'/>
        <ButtonHeader text='Seus produtos'/>
        <ButtonHeader text='Compartilhe'/>
      </div>
      <div className={style.triangulediv}>
        <div className={style.triangule}></div>
      </div>
    
    </header>
  )
}

export default Header