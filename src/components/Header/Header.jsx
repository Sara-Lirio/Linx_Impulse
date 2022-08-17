import React from 'react'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div>
        <p>uma seleção de produtos</p>
        <h1>especial para você</h1>
        <p>Todos os produtos desta lista foram selecionados a partir de sua navegação. Aproveite!</p>

        <div>
            <Button text='Conheça a Linx'></Button>
            <Button text='Ajude o algorítimo'></Button>
            <Button text='Seus produtos'></Button>
            <Button text='Compartilhe'></Button>
        </div>
    </div>
  )
}

export default Header