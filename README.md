# Prova Técnica Fullbar - Dev Front-end


Projeto não precisa ser executado para testes. Publiquei a aplicação como um subdomínio do meu sit. [Clique aqui para testar a aplicação](http://fullbarchallenger.abnersouza.dev.br)

Aplicação desevolvida como parte do processo seletivo para o cargo de Dev Front-end PJ na FULLBAR.


## Considerações

* Aplicação desenvolvida em VueJS + VueRouter;
* Funcionalidades:
   - [x] Lista de pokémons em ordem crescente;
   - [x] Cada item da lista deve conter imagem, número, nome e tipo;
   - [x] Input com número do pokémon inicial que será carregado (validação para que o número não seja maior que o número final);
   - [x] Input com número do pokémon final que será carregado (validação para que o número não seja menor que o número inicial);
   - [x] Select com as opções de quantos pokémons serão carregados por vez (10, 20 e 30). Obs.: Fiz com (12, 24 e 36) por questões de design;
   - [ ] Select com as opções de "Scroll Infinito" e "Paginação" (montar as duas opções). Obs.: Fiz apenas a versão Infinite Scroll;
   - [x] Botão para filtrar pokemon pelo nome;
   - [x] Lazyload de Imagens.

* Detalhe do Pokemon:
   - [x] Utilizado sistema de grid com cards e efeito rotate(180º) via css. Detalhes constam no verso do card após clique.

* Requisitos:
   - [x] Utilize HTML5 e CSS3 com Flex. Obs.: Ainda adicionei grid;
   - [x] Não utilize Bootstrap ou outros frameworks do tipo. Obs.: Utilizei Tailwind, mas só traz classes, não traz grupos de código pronto como o BS.
   - [x] Não utilize jQuery;
   - [x] O Layout precisa ser responsivo;
   - [x] Descreva no README como executar seu projeto. Obs.: Projeto está publicado e não precisa ser executado. Só clicar no link acima.
   - [x] Deixe seu repositório público para analise do Pull Request.

* Ganha mais pontos:
   - [x] Utilizar Vue, React ou automação Gulp. Obs.: Utilizei VueJS;
   - [x] Utilizar Sass;
   - [x] Otimizações para aumentar a velocidade de renderização; Obs.: Lazyload
   - [ ] UI e UX bem pensadas e executadas. Obs.: Na minha opinião, sim, mas depende de avaliação.

* Submissão:
   - [x] Criar um fork desse projeto e entregar via Pull Request.


## Códigos construídos

1. Assets
   1. Diretório src/assets/css/index.css
   2. Diretório src/assets/scss/fonts.scss
   3. Diretório src/assets/scss/app.scss

2. Components
   1. Diretório src/components/Pokemon.vue

3. Factories
   1. Diretório src/factories/PokeFactory.js

4. Services
   1. Diretório src/services/PokeService.js
   
5. Router
   1. Diretório src/routes/index.js

6. Views
   1. Diretório src/views/Home.vue
   2. Diretório src/views/Pokedex.vue

7. App
   1. Diretório src/App.vue

8. Main
   1. Diretório src/main.js


# Obrigado pela Oportunidade!!! ;-)
