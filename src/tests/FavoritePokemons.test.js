import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';

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
});
