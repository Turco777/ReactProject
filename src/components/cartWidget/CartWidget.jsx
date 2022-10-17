import { BiCartAlt } from "react-icons/bi";
import { useCartContext } from "../../context/CardContext";
import  estilos from './widget.module.css'

  export  const CartWidget = () =>{
    const {totalProducts} = useCartContext()
    return(
    
    <div className={estilos.connt}>
    
    <span className={estilos.icono}><BiCartAlt/>{totalProducts() || ''}</span>

    </div>

    )
}

export default CartWidget