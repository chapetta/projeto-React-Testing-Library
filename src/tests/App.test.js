import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Fazendo os testes pro componente App', () => {
  test('testando se a aplicação contém um conjunto fixo de links de navegação', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const listLinks = screen.getAllByRole('link');

    expect(listLinks[0]).toHaveTextContent(/Home/i);
    expect(listLinks[1]).toHaveTextContent(/About/i);
    expect(listLinks[2]).toHaveTextContent(/Favorite Pokémons/i);
  });
  test('Testando se é redirecionada para a pág inicial / ao clicar no link Home ', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const linkHome = screen.getByRole('link', { name: /Home/i });
    userEvent.click(linkHome);

    expect(window.location.pathname).toBe('/');
  });
  test('testando se é redirecionada para a pag about ao clicar no link about', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const linkAbout = screen.getByRole('link', { name: /About/i });

    userEvent.click(linkAbout);

    expect(window.location.pathname).toBe('/about');
  });
  test('testando se é red para a pag de fav ao clicar no link favorites', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const linkFavorite = screen.getByRole('link', { name: /Favorite/i });

    userEvent.click(linkFavorite);

    expect(window.location.pathname).toBe('/favorites');
  });
});
