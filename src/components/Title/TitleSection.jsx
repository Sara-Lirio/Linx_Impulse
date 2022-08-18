import React from 'react'
import style from './Title.module.css'

const TitleSection = ({ title }) => {
    return (
        <div className={style.titleLine}>
            <h3 className={style.titleSection}>{title}</h3>
        </div>
    )
}

export default TitleSection