import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Product from '../Product/Product'
import TitleSection from '../Title/TitleSection'
import style from './Section.module.css'

const Section = () => {
  const url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
  const [info, setInfo] = useState([])
  const [nextPage, setNextPage] = useState(url)

  async function handleReq() {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json.products)
    const results = json.products
    return results
  }

  const handlePage = async () => {
    const response = await fetch(url);
    const result = response.json();
    const urlPage = await result(nextPage);
    return `https://${urlPage.nextPage}`
  }


  useEffect(() => {
    const effect = async () => {
      setInfo(await handleReq())
      setNextPage(await handlePage())
    }
    effect()
  }, [])

  useEffect(() => {
    const newPage = async () => {
      setNextPage(await handlePage());
    }
    newPage();
  }), [info];

  return (
    <>
      <section className={style.section}>
        <TitleSection title='Sua seleção especial' />
        <section className={style.products}>

        <Product products={info} />
        </section>
        <div className={style.buttonSection}>
          <Button text='Ainda mais produtos aqui!' />
        </div>
      </section>

      <section className={style.share}>
        <TitleSection title='Compartilhe a novidade' />
        <p className={style.textShare}>Quer que seus amigos também ganhem a lista
          personalizada deles? Preencha agora!</p>
        <form className={style.forms}>
          <div className={style.name}>
            <Label text='Nome do seu amigo:' />
            <Input type='text' />
          </div>
          <div className={style.email}>
            <Label text='E-mail:' />
            <Input type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' />
          </div>
        </form>
        <div className={style.buttonSection}>
          <Button text='Enviar agora' />
        </div>
      </section>
    </>
  )
}

export default Section