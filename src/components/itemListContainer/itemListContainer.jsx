import React, {useEffect, useState} from 'react'
import { productos } from '../mock/productos'
import  ItemList  from '../itemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () =>{
    const [items, setItems] = useState([])

    const {categoriasName} = useParams()

    useEffect(()=> {
        const listadoProducts = new Promise((res,rej)=>{
            const prodFiltrados = productos.filter((prod)=>prod.categoria === categoriasName )

            setTimeout(()=>{
             res(categoriasName ? prodFiltrados : productos )
            },200) 
         });
     
     
     listadoProducts.then((data)=>{
         setItems(data)
     })
        
       .catch((error) => {
         console.log('hubo un error',error)
       }
     
       )
    }, [categoriasName])
    

    return(
    <div>
    <ItemList items={items}/>
    </div>
    )
}


export default ItemListContainer