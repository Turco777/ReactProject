import './App.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';
import ItemDetailContainerm from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';


const App = () => {

  const bienvenida = 'bienvenidos a nuestra pagina web'
 
  let stock = 15
  let initial = 0
 
const onAdd = ()=>{
  alert("agregaste productos al carrito")
}
  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
     <Route path="/" element= {<ItemListContainer bienvenida={bienvenida}/>} />
     <Route path='/itemdetail/:idProd' element={<ItemDetailContainerm/>}/>
     <Route path='/categorias/:categoriasName'element={<ItemListContainer/>}/>
     <Route path='/Cart' element={<Cart/>}/>
    </Routes>

    <Footer/>

    

    </BrowserRouter>
  )
}

export default App;