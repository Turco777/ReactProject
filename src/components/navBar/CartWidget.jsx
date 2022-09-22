import { BiCartAlt } from "react-icons/bi";
import  estilos from'./NavBar.module.css'
  export  const CartWidget = () =>{
    return(
      <div>
        <span className={estilos.icono}><BiCartAlt/>Carrito:0</span>
      
      </div>
    )
}