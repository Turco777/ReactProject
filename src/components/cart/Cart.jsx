import React from "react"
import { useCartContext } from "../../context/CardContext"
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/itemCart";
import estilos from "./cart.module.css"

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

 if(cart.length === 0){
    return(
    <>
    <p className={estilos.pr}>por favor agrega productos al carrito</p>
    <Link className={estilos.link} to='/'>Click aqui Para agregar productos</Link>
    </>)
 }
 return(
    <div>
        {
            cart.map(producto => <ItemCart key={producto.id} producto={producto}/>)
        }
        <p className={estilos.total}>
            Total:${totalPrice()}
        </p>
    </div>
 )

}

export default Cart