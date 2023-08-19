import { queryAllByAltText, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  test('Teste se as informações do pokémon selecionado são mostradas na tela', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const linkDetails = screen.queryByRole('link', { name: /More details/i });
    userEvent.click(linkDetails);

    const titleDetail = screen.queryByRole('heading', { name: /Pikachu Details/i });
    expect(titleDetail).toBeInTheDocument();
    expect(linkDetails).not.toBeInTheDocument();

    const summaryText = screen.queryByRole('heading', { name: /Summary/i, level: 2 });
    const resumeText = screen.queryByText(/This intelligent Pokémon roasts hard/i);

    expect(summaryText).toBeInTheDocument();
    expect(resumeText).toBeInTheDocument();

    const text = /Game Locations of Pikachu/i;
    const textLocation = screen.queryByRole('heading', { name: text });
    expect(textLocation).toBeInTheDocument();

    const locations = screen.queryAllByAltText('Pikachu location');
    const URL_01 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    console.log(locations);
    const nameLocation1 = screen.queryByText('Kanto Viridian Forest');
    const nameLocation2 = screen.queryByText('Kanto Power Plant');

    expect(locations).toHaveLength(2);
    expect(locations[0]).toBeInTheDocument();
    expect(locations[1]).toBeInTheDocument();
    expect(nameLocation1).toBeInTheDocument();
    expect(nameLocation2).toBeInTheDocument();
    expect(locations[0].src).toBe(URL_01);
    const favoriteIcon = screen.queryByLabelText(/Pokémon favoritado?/i);

    expect(favoriteIcon).toBeInTheDocument();

    userEvent.click(favoriteIcon);

    const starIcon = screen.queryByAltText('Pikachu is marked as favorite');

    expect(starIcon).toBeInTheDocument();
    userEvent.click(favoriteIcon);

    expect(starIcon).not.toBeInTheDocument();
  });
});
