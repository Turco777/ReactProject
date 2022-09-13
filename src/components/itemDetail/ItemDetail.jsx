import React from "react"
import estilo from "./ItemDetail.module.css"


const ItemDetail = ({data})=>{
   
    return(
        <div className={estilo.container}>
    <h2>{data.nombre}</h2>
     <h3 className={estilo.titulo}><b className={estilo.precioos}>Detalles:</b> {data.desc}</h3>
     <p className={estilo.pp} ><b className={estilo.precioos}>Precio:</b> ${data.precio}</p>
     <img className={estilo.precio} src={data.img} alt="" />
     <button className={estilo.btn}>Comprar</button>
     </div>
    )
}
export default ItemDetail;