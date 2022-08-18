import React from 'react'
import style from './Input.module.css'

const Input = ({type}) => {
  return (
    <div>
        <input className={style.input} type={type}></input>
    </div>
  )
}

export default Input