import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o componente About', () => {
  test('Testando se a página contém as informações sobre a Pokédex', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const linkAbout = screen.getByRole('link', { name: /about/i})
    userEvent.click(linkAbout);

    const textPokedex = await screen.findByText(/About Pokédex/i);

    expect(textPokedex).toBeInTheDocument();
  });
});
