import React from 'react'
import style from './Text.module.css'

const Text = ({text}) => {
  return (
    <div>
        <p className={style.text}>{text}</p>
    </div>
  )
}

export default Text