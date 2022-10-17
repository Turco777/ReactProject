import './App.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

import ItemDetailContainerm from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';

import CartProvider from './context/CardContext';
import FinDeCompra from './components/finDeCompra/finDeCompra';

const App = () => {

  const bienvenida = 'bienvenidos a nuestra pagina web'

  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>

    <Routes>
      <Route path="/" element= {<ItemListContainer bienvenida={bienvenida}/>} />
      <Route path='/itemdetail/:idProd' element={<ItemDetailContainerm/>}/>
      <Route path='/categorias/:categoriasName'element={<ItemListContainer/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route  path='/finDeCompra' element={<FinDeCompra/>} />
    </Routes>

    </CartProvider>
    <Footer/>

    

    </BrowserRouter>
  )
}

export default App;