import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <ul className ="ulHeader">
            <li className ="liHeader">Drinks</li>
            <li className ="liHeader">Sobre nós</li>
            <li className ="liHeader">Bons Drinks</li>
            <li className ="liHeader">Nosso Time</li>
            <li className ="liHeader">Contatos</li>
          </ul>
        </header>
      </div>
    );
  }
}
