import { useCartContext } from "../../context/CardContext"
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/itemCart";
import estilos from "./cart.module.css";


const Cart = () => {

    const { cart, totalPrice,clearCart } = useCartContext();
    const total = totalPrice();

    

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

        <div className={estilos.containerBtn}> <button className={estilos.btnEliminar} onClick={clearCart}>VACIAR CARRITO</button></div>
        <p className={estilos.total}>
            Total:${totalPrice()}
        </p>
        <button className={estilos.btnFinalizar}>
            <Link className={estilos.linkk} to='/finDeCompra'> terminar compra</Link>
        </button>
    </div>
)

}

export default Cart