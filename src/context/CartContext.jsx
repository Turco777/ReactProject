import React,{ useState,useContext }from "react";
export const CartContext = React.createContext('')


 export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

const [cart, SetCart] = useState([]);


const addProduct = (item , newQuantity) =>{
   
    const newCart = cart.filter(prod => prod.id !== item.id);
    newCart.push({...item, quantity: newQuantity})
    SetCart(newCart)
}
console.log('carrito',cart)



const clearCart = ()=> SetCart([])


const isToCart = (id) => {
    return cart.find(product => product.id === id) ? true : false;
}

const removeProduct = (id) => SetCart(cart.filter(product => product.id !== id))


    return (
        <CartContext.Provider value={{
            clearCart,
            isToCart,
            removeProduct,
            addProduct

        }}>
{children}
        </CartContext.Provider>
    )
}

export default CartProvider;