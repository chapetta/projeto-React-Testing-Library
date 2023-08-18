import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o componente Pokedex.js', () => {
  test('Testando se contém um heading h2 com o texto Encountered pokémons', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const title = screen.queryByRole('heading', { name: /Encountered pokémons/i });
    expect(title).toBeInTheDocument();
  });
  test('Testando se é exibido o próximo pokémon da lista clicnado no botao', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const pikachu = screen.queryByAltText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();

    const btnNext = await screen.queryByTestId('next-pokemon');
    userEvent.click(btnNext);
    const charmander = await screen.findByAltText(/Charmander/i);

    expect(charmander).toBeInTheDocument();
  });
  test('Teste se é mostrado um pokemon por vez', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const pokemons = screen.queryAllByTestId('pokemon-name');
    expect(pokemons).toHaveLength(1);
  });
  test('Teste se a Pokédex tem os botões de filtro', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const allButton = screen.queryAllByTestId('pokemon-type-button');
    expect(allButton[1]).toHaveTextContent('Fire');

    userEvent.click(allButton[1]);

    const typePokemon = screen.queryByTestId('pokemon-type');

    expect(typePokemon).toHaveTextContent('Fire');
  });
});
