import Item from "../item/Item"
import estilos from './ItemList.module.css'


const ItemList = ({items})=>{

    return <div className={estilos.contenedor}>
    {
        items.map((items)=>{
            return(
                <Item items={items}/>
            )
        })
    }
</div>
    
};
export default ItemList