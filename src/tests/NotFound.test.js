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
});
