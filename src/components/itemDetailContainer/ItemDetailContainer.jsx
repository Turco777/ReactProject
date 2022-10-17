import React,{useEffect, useState} from "react"
import { db } from "../firebaseConfig"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, getDoc, doc } from "firebase/firestore"


const ItemDetailContainerm = ()=>{
const {idProd} = useParams();

// const product = productos.find((productos)=>productos.id === Number(idProd))

const [data, setData] = useState({})

useEffect(() =>{
    const productsCollection = collection(db, "productos")
    const ref = doc(productsCollection, idProd)

    getDoc(ref)
    .then((doc) =>{
        setData({
            id: doc.id,
            ...doc.data(),
        })
    })
},[idProd])

    return(
        
        <>
        {data ? (<ItemDetail data={data}/>) : (<h2 >Cargando...</h2>)}
        </>
    )
}


export default ItemDetailContainerm