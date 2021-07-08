# FullBar Desafio para Desenvolvedor Front-End 

## `A Aplicação e Como utilizar`
### `Utilizando npm`
Para rodar o ambiente de desenvolvimento utilizando o **npm**, basta executar os comandos abaixo na raiz do projeto.

```bash
user@finxi:~$ npm install
user@finxi:~$ npm install -g @vue/cli
user@finxi:~$ npm run serve
``` 
Para utilizar a aplicação basta acessar `http://localhost:8080/`. 

Ao rodar o primeiro comando o npm irá instalar todas as dependências necessárias que o projeto precisa para funcionar. O segundo irá instalar o cli (command language interface) que será responsável por levantar um serviço que possibilitará rodar a aplicação. O terceiro comando é syntax sugar para o seguinte comando do vue-cli `vue-cli-service serve` .


## `Objetivo`
Desenvolver uma aplicação Front-End utilizando os frameworks VueJs consumindo a API pública [PokeApi](https://pokeapi.co/).

### `Requisitos`

- [x] Utilize HTML5 + CSS3 com Flex.
- [x] Não utilize Bootstrap ou outros frameworks do tipo.
- [x] Não utilize jQuery.
- [x] O Layout precisa ser responsivo.
- [x] Descreva de forma simples no README os passos para execução do seu projeto.
- [x] Deixe seu repositório público para analise do Pull Request.​
- [x] Input com número do pokémon inicial que será carregado (validação para que o número não seja maior que o número final);
- [x] Input com número do pokémon final que será carregado (validação para que o número não seja menor que o número inicial);
- [x] Select com as opções de quantos pokémons serão carregados por vez (10, 20 e 30);
- [x] Select com as opções de "Scroll Infinito" e "Paginação" (montar as duas opções);
- [x] Botão para aplicar o filtro.
