import React from 'react'
import "./ItemListC.css"

export default function ItemListContainer({greeting}) {
  return (
    <>
      <h1 className='bienvenido'>{greeting}</h1>
    </>
  )
}
