# Olá, e bem vindo(a) ao fascinante muito de Pokémon.
Aqui temos uma lista com todos os pokemons conhecidos, e antes de perguntar o nome do meu neto, vou lhe apresentar o processo por trás do desenvolvimento dessa pokeaplicação
​
## Dependencias usadas ##
A lista a seguir são todas as dependencias usadas nesse projeto, mesmo que seja em só um componente:
  - axios
  - react-router-dom
  - redux
  - redux-thunk
  - react-redux
  - yup
  - @hookform/resolvers
  - react-hook-form
​
### Processo de desenvolvimento ##

A primeira coisa que eu fiz, depois do fork e do git clone, foi pensar em todos os requisitos em como eles interagem entre sí e quais dependencias eu precisaria. 

Criei uma estrutura inicial com header, main e footer, sem quase nenhum estilo e com placeholder apenas pra visualização. 

Criei o componente de card que foi usado no CardsField com o map para gerar todos os pokemons, com  dois pokemons mockados pra poder ajustar um estilo inicial.

Montei a estrutura do redux-thunk que faz a requisição de todos os 898 pokemons e guarda em um estado, para que possam ser usados depois. Adotei essa abordagem que carregar todos inicalmente, pois é muito difícil trabalhar com a API do Pokemon e ela traz algumas dificuldantes no que tange a encontrar os dados. 

Montei dois estados com o Redux, um que pega todos os links de todos os pokemons do link base, e o segundo é o que faz uma requisição individualmente para cada pokemon, para que os dados usado sejam separados de uma maneira fácil de puxar no futuro. 

Com esses dados prontos, eu coloquei o cards field pra funcionar, carregando todos os pokemons. 

Criei o recurso de filtro, com o limite de pokemons e com o yup e o React-Hook-Forms, além de colocar as validações pedidas.

Criei e adaptei os recurso de paginação de acordo com o filtro.

Trabalhei em cima do estilo, pegando como base o https://www.pokemon.com/br/


​
#### Conclusão:
Gostei bastante de trabalhar nessa entrega, mesmo demorando mais do que eu queria, acredito ter feito um bom trabalho, claro que está longe de ser a melhor solução pra esses requisitos, mas eu me dediquei bastante ao desenvolvimento. Outro ponto é que eu nunca tinha feito um scroll infinito junto com uma paginação sendo trocada por um formulário, foi bem desafiador, mas felizmente, eu consegui fazer.