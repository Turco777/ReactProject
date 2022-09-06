import Item from "../item/item"
import estilos from './itemList.module.css'


const ItemList = ({items})=>{

    return<div className={estilos.productos}>
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