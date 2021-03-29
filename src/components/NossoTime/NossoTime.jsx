import React from 'react'
import style from '../Sobre/Sobre.module.css'
import time from '../../img/time.jpg'
import "./estilo.css"

export default function NossoTime() {
    return (
      <div className={style.conteudoSobre}>
        <h1 className={style.tituloSobre}>Nosso Time</h1>
        <img src={time} className={style.imagemSobre + " " + "time"}></img>
        <div className={style.textoSobre}>
          <p>
            Há oito anos trabalhando com atividades de caráter administrativo e
            setor financeiro, agora, em momento de transição de carreira. Também
            tive experiência com vendas e atendimento ao público ao longo desses
            anos, o que me fez aprender a ver os negócios com outros olhos, e
            principalmente conhecer a perspectiva do cliente. Sou apaixonado por
            tecnologia, atualmente estou em transição para área de produtos
            digitais e desenvolvimento, em busca de novos desafios e
            aprendizados constante.
          </p>
        </div>
      </div>
    );
}
