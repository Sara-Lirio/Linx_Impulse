import React from 'react'
import Text from '../Text/Text'
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <Text text='Testando suas habilidades em HTML, CSS e JS.' />
            <Text text='Linx Impulse' />
            <Text text='2019' />
        </div>
    )
}

export default Footer