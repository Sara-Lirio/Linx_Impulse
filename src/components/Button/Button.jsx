import React from 'react'
import style from './Button.module.css'

const Button = ({text,onclick,type}) => {
  return (
    <button className={style.buttons} onClick={onclick} type={type}>{text}</button>
  )
}

export default Button