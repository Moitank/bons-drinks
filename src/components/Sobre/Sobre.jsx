import React from 'react'
import style from "./Sobre.module.css"
import sobre from "../../img/bg-bons-drinks.jpg"


export default function Sobre() {
    return (
      <div className={style.conteudoSobre}>
        <h1 className={style.tituloSobre}>Sobre</h1>
        <img src={sobre} className={style.imagemSobre}></img>
        <div className={style.textoSobre}>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia</p>
        </div>
        </div>
    )
}
