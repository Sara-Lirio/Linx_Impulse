import React from 'react'
import style from './Input.module.css'

const InputRadio = () => {
  return (
    <div>
        <input className={style.inputRadio} type='radio' required></input>
    </div>
  )
}

export default InputRadio