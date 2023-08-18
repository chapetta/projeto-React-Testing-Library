import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const pokemonName = screen.queryByTestId('pokemon-name');
    const pokemonType = screen.queryByTestId('pokemon-type');
    const pokemonWight = screen.queryByTestId('pokemon-weight');
    const pokemonImage = screen.queryByAltText('Pikachu sprite');
    const URL_IMAGE = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';

    expect(pokemonName).toHaveTextContent('Pikachu');
    expect(pokemonType).toHaveTextContent('Electric');
    expect(pokemonWight).toHaveTextContent('Average weight: 6.0 kg');
    expect(pokemonImage.src).toBe(URL_IMAGE);
  });
  test('Teste se o card do pokémon contém um link para exibir detalhes', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const linkDetails = screen.queryByRole('link', { name: /More details/i });

    expect(linkDetails.href).toBe('http://localhost/pokemons/25');

    userEvent.click(linkDetails);
    const pikachuDetails = screen.queryByRole('heading', { name: /Pikachu Detail/i });

    expect(pikachuDetails).toBeInTheDocument();
    expect(window.location.pathname).toBe('/pokemons/25');

    const favoriteIcon = screen.getByLabelText(/Pokémon favoritado?/i);
    userEvent.click(favoriteIcon);

    const starIcon = screen.queryByAltText('Pikachu is marked as favorite');

    expect(starIcon.src).toBe('http://localhost/star-icon.svg');
  });
});
