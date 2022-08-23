import React from 'react'
import style from './Input.module.css'

const Input = ({type, pattern}) => {
  return (
    <div>
        <input className={style.input} type={type} pattern={pattern}></input>
    </div>
  )
}

export default Input