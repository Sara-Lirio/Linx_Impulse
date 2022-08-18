import React from 'react'
import style from './Button.module.css'

const Button = ({text}) => {
  return (
    <button className={style.buttons}>{text}</button>
  )
}

export default Button