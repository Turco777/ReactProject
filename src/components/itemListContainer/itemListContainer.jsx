import React, {useEffect, useState} from 'react'
import { productos } from '../mock/productos'
import  ItemList  from '../itemList/itemList'


const ItemListContainer = () =>{
    const [items, setItems] = useState([])

    

    useEffect(()=> {
        const listadoProducts = new Promise((res,rej)=>{
            setTimeout(()=>{
             res(productos)
            },2000) 
         });
     
     
     listadoProducts.then((data)=>{
         setItems(data)
     })
        
       .catch((error) => {
         console.log('hubo un error',error)
       }
     
       )
    }, [])
    

    return(
   
    <ItemList items={items}/>
    
    )
}


export default ItemListContainer