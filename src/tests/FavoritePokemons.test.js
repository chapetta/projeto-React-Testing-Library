import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

describe('Testando o componente FavoritePokemons.js', () => {
  test('teste se é exibida a mensagem "No favorite pokemon found"', () => {
    render(
      <BrowserRouter>
        <FavoritePokemons />
      </BrowserRouter>,
    );

    const favoritesPokemons = screen.queryByTestId('pokemon-name');
    const textNotFound = screen.queryByText(/No favorite pokemon found/i);

    expect(favoritesPokemons).not.toBeInTheDocument();
    expect(textNotFound).toBeInTheDocument();
  });

  test('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);
    const favorite = screen.getByLabelText(/Pokémon favoritado?/i);
    userEvent.click(favorite);

    render(<FavoritePokemons />);
    const pokemonName = screen.getByTestId('pokemon-name');

    expect(pokemonName).toBeInTheDocument();
  });
});
