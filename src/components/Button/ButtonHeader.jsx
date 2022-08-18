import React from 'react'
import style from './Button.module.css'

const ButtonHeader = ({text}) => {
  return (
    <button className={style.buttonHeader}>{text}</button>
  )
}

export default ButtonHeader