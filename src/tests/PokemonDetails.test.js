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
    console.log(locations);
    const nameLocation = screen.queryByText('Kanto Viridian Forest');

    expect(locations).toHaveLength(2);
    expect(locations[0]).toBeInTheDocument();
    expect(locations[1]).toBeInTheDocument();
    expect(nameLocation).toBeInTheDocument();
  });
});
