import React from 'react'
import style from './Subtitle.module.css'

const Subtitle = ({subtitle}) => {
  return (
    <h2 className={style.subtitle}>{subtitle}</h2>
  )
}

export default Subtitle