export const requisicao = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');

  const dados = await response.json();

  return dados.drinks;
}