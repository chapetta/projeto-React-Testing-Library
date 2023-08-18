import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import NotFound from '../pages/NotFound';

describe('Testando o componente NotFound.js', () => {
  test('Testando contém um heading h2 com o texto Page requested not found', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    const textNotFound = screen.queryByRole('heading', { name: /Page requested/i });
    expect(textNotFound).toBeInTheDocument();
  });
  test('Testando se a pagina mostra uma imagem especifica', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    const URL_IMAGE = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    const image = screen.queryByAltText(/pikachu crying/i);

    expect(image.src).toBe(URL_IMAGE);
    expect(image).toBeInTheDocument();
  });
});
