import Item from "../item/Item"
import estilos from './ItemList.module.css'


const ItemList = ({items})=>{

    return <div className={estilos.productos}>
    {
        items.map((items)=>{
            return(
                <div className={estilos.contenedor}>
                <Item items={items}/>
                </div>
            )
        })
    }
</div>
    
};
export default ItemList