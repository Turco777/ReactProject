import React,{useEffect, useState} from "react"

import { productos } from "../mock/productos"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainerm = ()=>{
const {idProd} = useParams();

const product = productos.find((productos)=>productos.id === Number(idProd))

const [data, setData] = useState({})

useEffect(() =>{
    const getData = new Promise((resolve, reject) => {
        setTimeout(()=>{
      resolve(product)
        },1000)
    })
    getData.then((data)=>{setData(data)})
},[product])


    return(
        
            <ItemDetail data={data}/>
    )
}


export default ItemDetailContainerm