import React from "react";
import styles from  "./Header.module.css"
import {Link} from "react-router-dom"

export default function Header() {
  
    return (
      
        <header>
          <ul className={styles.ulHeader}>
            <li>
              <Link to="/drinks">Drinks</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre Nós</Link>
            </li>
            <li className ={styles.logo}>
              <Link to="/">Bons Drinks</Link>
            </li>
            <li>
              <Link to="/nosso-time">Nosso Time</Link>
            </li>
            <li>
              <Link to="/contatos">Contato</Link>
            </li>
          </ul>
        </header>
      
    );
  
}
