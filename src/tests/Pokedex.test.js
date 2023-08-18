import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';

describe('Testando o componente Pokedex.js', () => {
  test('Testando se contém um heading h2 com o texto Encountered pokémons', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const title = screen.queryByRole('heading', { name: /Encountered pokémons/i});
    expect(title).toBeInTheDocument();
  });
});
