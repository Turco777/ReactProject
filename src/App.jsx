import './App.css';
import Nav from './components/nav/nav'
import Main from './components/main/main';
import Footer from './components/footer/footer';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import Contador from './components/contador/contador';



const App = () => {

  const bienvenida = 'bienvenidos a nuestra pagina web'
 
  let stock = 15
  let initial = 0
 
const onAdd = ()=>{
  alert("agregaste productos al carrito")
}
  return (
    <>
    <Nav/>
    <Main/>
    <ItemListContainer bienvenida={bienvenida}/>
    <Contador stock={stock} initial={initial} onAdd={onAdd}/>
   
    <Footer/>
    
    </>
  )
}

export default App;