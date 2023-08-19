<h1> Boas-vindas ao repositório do projeto de testes com a React Testing Library! </h1>
 
 <h4>Sobre o projeto:</h4>
 <p>
Nesse projeto escrevi testes para uma aplicação React que já está criada e configurada, utilizando Jest e a biblioteca React Testing Library.<br>

 </p>


 <h3>Habilidades usadas no projeto:</h3><br>

 <p>1. Utilizar os seletores (queries) da React-Testing-Library em testes automatizados;</p><br>
 <p>2. Simular eventos com a React-Testing-Library em testes automatizados</p><br>
 <p>3. Testar fluxos lógicos assíncronos com a React-Testing-Library</p><br>
 <p>4. Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados</p><br>
 <p>5. Testar inputs</p><br>
 
 <h3> Requisitos do Projeto: </h3>
 
 <p> 
  
 1. Teste o componente App.js<br><br>

    Teste se o topo da aplicação contém um conjunto fixo de links de navegação<br>
    Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;<br>
    Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação;<br>
    Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação;<br>
    Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.


2. Teste o componente About.js

Teste se a página contém as informações sobre a Pokédex;
Teste se a página contém um heading h2 com o texto About Pokédex;
Teste se a página contém dois parágrafos com texto sobre a Pokédex;
Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.



3.  Teste o componente FavoritePokemons.js

Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos;
Teste se são exibidos todos os cards de pokémons favoritados.

4. Teste o componente NotFound.js

Teste se a página contém um heading h2 com o texto Page requested not found 😭;
Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.

5. Teste o componente Pokedex.js

Teste se a página contém um heading h2 com o texto Encountered pokémons;
Teste se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado:
Teste se é mostrado apenas um pokémon por vez;
Teste se a Pokédex tem os botões de filtro:
Teste se a Pokédex contém um botão para resetar o filtro:

6.  Teste o componente Pokemon.js

Teste se é renderizado um card com as informações de determinado pokémon:
Teste se o card do pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL /pokemons/<id>, onde <id> é o id do pokémon exibido;
Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon;
Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do pokémon cujos detalhes se deseja ver;
Teste se existe um ícone de estrela nos pokémons favoritados:

7. Teste o componente PokemonDetails.js

Teste se as informações detalhadas do pokémon selecionado são mostradas na tela:
Teste se existe na página uma seção com os mapas contendo as localizações do pokémon:
Teste se o usuário pode favoritar um pokémon através da página de detalhes:
</p>

 
