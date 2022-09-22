import React, {useEffect, useState} from 'react'
import { productos } from '../mock/productos'
import  ItemList  from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { CombSpinner } from "react-spinners-kit";


const ItemListContainer = () =>{
    const [items, setItems] = useState([])
    const [isloanding, setLoanding] = useState(true)

    const {categoriasName} = useParams()

    useEffect(()=> {
        const listadoProducts = new Promise((res,rej)=>{
            const prodFiltrados = productos.filter((prod)=>prod.categoria === categoriasName )

        setTimeout(()=>{
            res(categoriasName ? prodFiltrados : productos )
            },3000) 
        });


    listadoProducts.then((data)=>{
        setItems(data)
        setLoanding(false)
    })
        
        .catch((error) => {
        console.log('hubo un error',error)
        }

        )

        return() => {
            setLoanding(true)
        }

    }, [categoriasName])


    return(
    <div>
        {isloanding ? ( <>
        <h2>Cargando productos....</h2>
        <CombSpinner color="black" font-size="900"/>
    </> ):
    (
    <>

    <ItemList items={items}/> </>

    )}

    </div>
    )

}

export default ItemListContainer