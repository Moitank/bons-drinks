import { React, useEffect, useState } from "react";
import Card from "../Card/Card";
import "./api.css";
import { requisicao } from "../../model/arquivoFetch";
import ConteudoDrinks from "../ConteudoDrinks/ConteudoDrinks";

export default function Api(props) {
  let [dadosApi, setDadosApi] = useState("Enviar");
  let [dadosApiConteudo, setDadosApiConteudo] = useState(0);

  let render = [
    <ConteudoDrinks
      className="conteudoDrinks"
      nomeDrink={dadosApi[0].strDrink}
      categoriaDrink={dadosApi[0].strCategory}
      copoDrink={dadosApi[0].strGlass}
      ibaDrink={dadosApi[0].strIBA}
      ingredienteDrink={dadosApi[0].strIngredient1}
      instrucoesDrink={dadosApi[0].strInstructions}
    />
    
  ];

  function dadosCategoria(number) {
    console.log()
    return render[number];
  }

  function card1() {
    setDadosApi(dadosApi)
    setDadosApiConteudo(0)
  }
  function card2() {
    setDadosApi(dadosApi)
    setDadosApiConteudo(1)
  }

  useEffect(async () => {
    const req = await requisicao();
    setDadosApi(req);
  }, []);

  let arrayQuant = [card1, card2, "card3", "card4", "card5", "card6"];



  return (
    <div className="containerPrincipal">
    
      <div className="containerAlinhamento"></div>
      <ul className="ul-flex">
        <section className="cabecalho">
          <h1 className="titulo">Drinks</h1>
          <div className="botao">
            <button className="botoes">Drinks Populares</button>
            <button className="botoes">Buscar Drinks</button>
          </div>
        </section>
        <section className="bebidas">
          {arrayQuant.map((valor, index) => {
            return (
              <li>
                <Card noClick={valor} url={dadosApi[index].strDrinkThumb}>
                </Card>
              </li>
            );
          })}
        </section>
        <section className="drinks">
          {dadosCategoria(dadosApiConteudo)}
        </section>
        <section className="imagem">
          <img className="imagem2" src={dadosApi[0].strDrinkThumb} />
        </section>
      </ul>
      
    </div>
  );
}
