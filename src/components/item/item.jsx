import React from "react";
import estilos from "./item.module.css"

const Item = ({items}) => {
    return(
        
            <div className={estilos.producto}>
        <img src={items.img} className={estilos.img} alt=""/>
         <h3>{items.nombre}</h3>
         <p>{items.precio}</p>
         <h4>{items.cantidad}</h4>
         </div>
        
    )
}

export default Item