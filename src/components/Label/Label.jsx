import React from 'react'
import style from './Label.module.css'

const Label = ({text}) => {
  return (
    <label className={style.label}>{text}</label>
  )
}

export default Label