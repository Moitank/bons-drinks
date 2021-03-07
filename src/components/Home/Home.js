import React, { Component } from "react";
import styles from "./Home.module.css"

export default class Home extends Component {
  render() {
    return (
      <div>
        <main className={styles.MainCapa}>
          <h1>Bons Drinks</h1>
        </main>
      </div>
    );
  }
}
