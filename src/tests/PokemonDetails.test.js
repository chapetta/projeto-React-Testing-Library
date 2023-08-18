import { render, screen } from '@testing-library/react';
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
  });
});
