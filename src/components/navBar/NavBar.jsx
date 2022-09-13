import React from 'react';
import { CartWidget } from './CartWidget';
import  estilos from'./NavBar.module.css'

const NavBar = () =>{
    return( 
        <header>
            <nav className={estilos.nav}>
                
                <ul>
                <div className={estilos.logo}>
                 <p>Mundo <b className={estilos.masco}>MASCOTAS</b></p>
                 </div>
                    <li>
                        <a href="http://">Nosotros</a>
                    </li>
                    <li>
                        <a href="http://">Contacto</a>
                    </li>
                    <li>
                        <a href="http://">Nuestros clientes</a>
                    </li>
                    <li>
                        <a href="http://">Ubicacion</a>
                    </li>
                   <li>
                    <CartWidget/>
                   </li>
                </ul>
              
            </nav>
        </header>
    )
}

export default NavBar;