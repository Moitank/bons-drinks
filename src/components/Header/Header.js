import React, { Component } from "react";
import styles from  "./Header.module.css"

export default class Header extends Component {
  render() {
    return (
      
        <header>
          <ul className={styles.ulHeader}>
            <li>Drinks</li>
            <li>Sobre nós</li>
            <li className ={styles.logo}>Bons Drinks</li>
            <li>Nosso Time</li>
            <li>Contatos</li>
          </ul>
        </header>
      
    );
  }
}
