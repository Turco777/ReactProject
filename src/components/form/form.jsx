import React,{useState} from "react";
import {addDoc, collection,serverTimestamp} from "firebase/firestore";
import { db } from '../firebaseConfig';
import estilos from "./form.module.css"


const Form = ({cart,total,clearCart,handleId})=>{ 
   
    const [nombre, setnombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail]= useState('')
    const [emailRepeat, setEmailRepeat]= useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion,setDireccion] = useState('')
   

    const handleSubmit = (event)=>{
        event.preventDefault()
        
if (email === emailRepeat){
 
        const orden ={
            
            info: {nombre:nombre , apellido: apellido, email: email, telefono: telefono, direccion:direccion, },
            productos : cart,
            total : total,
            date : serverTimestamp()
        }

        const ordenCollection = collection(db, 'ordenes')

        addDoc (ordenCollection, orden).then((res)=>{
            handleId(res.id)
            clearCart()
        })
    }else{
        alert("los email deben concidir por favor")
    }
}






const handleChangeEmail = (event)=>{
    setEmail(event.target.value)
}

const handleChangeNombre = (event)=>{
    setnombre(event.target.value)
}

const handleChangeApellido = (event )=>{
    setApellido(event.target.value)
}
const handleChangeTelefono =(event)=>{
    setTelefono(event.target.value)
}
const handleChangeEmailRepeat =(event)=>{
    setEmailRepeat(event.target.value)
}
const handleChangeDireccion =(event)=>{
    setDireccion(event.target.value)
}

return(
<div>
    <form  className={estilos.container} action="" onSubmit={handleSubmit}>
<input className={estilos.inputt} type="text" 
placeholder="Nombre"
name="nombre"
value={nombre}
onChange={handleChangeNombre}

/>
<input className={estilos.inputt} type="text"
placeholder="apellido"
name="apellido"
value={apellido}
onChange={handleChangeApellido}
/>
<input className={estilos.inputt} type="number"
placeholder="Numero de telefono"
name="Telefono"
value={telefono}
onChange={handleChangeTelefono}/>

<input className={estilos.inputt} type="text"
placeholder="email"
name="email"
value={email}
onChange={handleChangeEmail}/>

<input className={estilos.inputt} type="text"
placeholder="por favor repetir email"
name="email"
value={emailRepeat}
onChange={handleChangeEmailRepeat}/>


<input className={estilos.inputt} type="text"
placeholder="direccion"
name="direccion"
value={direccion}
onChange={handleChangeDireccion}
/>
<div className={estilos.containerbtn}><button className={estilos.btnEnviar}>Enviar</button>
</div>


</form>

</div>


)
}
export default Form