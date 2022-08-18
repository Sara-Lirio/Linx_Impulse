import React from 'react'
import Text from '../Text/Text'
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.triangulediv}></div>
            <div className={style.text}>
                <Text text='Testando suas habilidades em HTML, CSS e JS.' />
                <Text text='Linx Impulse' />
                <Text text='2019' />
            </div>
        </footer>
    )
}

export default Footer