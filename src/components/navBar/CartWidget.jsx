import { BiCartAlt } from "react-icons/bi";
import { useCartContext } from "../../context/CardContext";
import  estilos from'./NavBar.module.css'
import { Link } from "react-router-dom";
  export  const CartWidget = () =>{
    const {totalProducts} = useCartContext()
    return(
      <div className={estilos.connt}>
      <>
    <Link to='/cart'>
    
    <span className={estilos.icono}><BiCartAlt/>{totalProducts() || ''}</span>
    </Link>
    </>
    </div>
    )
}