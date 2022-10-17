import React from 'react'
import {  useState } from 'react'
import { useCartContext } from "../../context/CardContext"
import Form from '../form/form'
import estilos from './fin.module.css'

const FinDeCompra = () => {
    const [idCompra, setIdCompra] = useState('')
    const { cart, totalPrice,clearCart } = useCartContext();
  const total = totalPrice()

    const handleId = (id)=>{
        setIdCompra(id)
    }
    if(idCompra){
        return( 
          <>
            <h1 className={estilos.finCompra}>tu numero de compra es:<b className={estilos.idCompra}>{idCompra}</b> </h1>
            <h2 className={estilos.gg}>Muchas gracias por elegirnos!! =)</h2>
            </>
        )
    }

  return (
    <div >
     <h2 className={estilos.title}>Por favor pone tus datos para finalizar la compra</h2>
      <div><Form cart={cart} total={total} clearCart={clearCart} handleId={handleId} /></div>
    </div>
  )
}

export default FinDeCompra