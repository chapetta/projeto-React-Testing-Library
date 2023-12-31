import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
import About from '../pages/About';

describe('Testando o componente About', () => {
  test('Testando se a página contém as informações sobre a Pokédex', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    const textPokedex = screen.queryByText(/About Pokédex/i);

    expect(textPokedex).toBeInTheDocument();
  });
  test('tentando se a pagina contem dois paragrafos com texto sobre pokedex', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    const paragraf = screen.queryAllByText(/Pokémons/i);
    expect(paragraf).toHaveLength(2);
  });
  test('tentando se a pagina contem uma imagem de uma pokedex', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    const URL_IMAGE = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.queryByAltText(/Pokédex/i);

    expect(image.src).toBe(URL_IMAGE);
  });
});
