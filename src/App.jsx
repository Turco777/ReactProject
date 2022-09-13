import './App.css';
import NavBar from './components/navBar/NavBar';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';
import ItemDetailContainerm from './components/itemDetailContainer/ItemDetailContainer';



const App = () => {

  const bienvenida = 'bienvenidos a nuestra pagina web'
 
  let stock = 15
  let initial = 0
 
const onAdd = ()=>{
  alert("agregaste productos al carrito")
}
  return (
    <>
    <NavBar/>
    <Main/>
    <ItemListContainer bienvenida={bienvenida}/>
    <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
    <ItemDetailContainerm />_
    <Footer/>
    
    </>
  )
}

export default App;