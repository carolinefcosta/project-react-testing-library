import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './services/renderWithRouter';
import { NotFound } from '../pages';

describe('Requisito 04', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const title = screen.getByRole('heading', { name: /Page requested not found/i });

    expect(title).toBeVisible();
  });

  test('Teste se a página mostra a imagem => (https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif)', () => {
    renderWithRouter(<NotFound />);

    const img = screen.getByAltText(/Pikachu crying because the page requested was not found/i);

    expect(img.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
