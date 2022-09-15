import React from 'react';
import { CartWidget } from './CartWidget';
import  estilos from'./NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return( 
        <header>
            <nav className={estilos.nav}>
                
                <ul>
                <div className={estilos.logo}>
                 <p>Mundo <b className={estilos.masco}>MASCOTAS</b></p>
                 </div>
                    
                    <Link to="/categorias/perros">Perros</Link>
                    
                
                    <Link to="/categorias/gatos">Gatos</Link>
                
            
                    <Link to="/categorias/peces">peces</Link>
                
            
                    <Link to="/">Inicio</Link>
                

                    <Link to="/contador"><CartWidget/></Link>
                
                </ul>
              
            </nav>
        </header>
    )
}

export default NavBar;