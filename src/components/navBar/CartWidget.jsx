import { BiCartAlt } from "react-icons/bi";
import  estilos from'./NavBar.module.css'
  export  const CartWidget = () =>{
    return <span className={estilos.icono}><BiCartAlt/>Carrito</span>
   
}