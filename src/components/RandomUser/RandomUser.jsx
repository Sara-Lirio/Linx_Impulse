import React, { useState } from 'react'

const RandomUser = () => {
    const [info, setInfo] = useState()

    async function handleReq (){
        const response = await fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
        const json = await response.json()
        console.log(json)   
        setInfo(json.products[0])
    } 


  return (
   <></>
  )
}

export default RandomUser

