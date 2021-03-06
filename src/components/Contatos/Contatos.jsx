import React, { Component } from 'react'
import styles from "./Contatos.module.css"
import imgContato from "./../../img/contatos.jpg"

export default class Contatos extends Component {
    render() {

        return (
            <div className={styles.formContainer}>
                <h1>Contato</h1>
                <div className={styles.mainForm}>
                    <img src={imgContato} alt="foto"/>
                    <form>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome"/>
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" id="email"/>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" rows="10"></textarea>
                        <button type="submit">Enviar</button>
                        
                    </form>
                </div>
            </div>

        )
    }
}
