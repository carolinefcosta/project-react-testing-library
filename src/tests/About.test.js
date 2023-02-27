import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './services/renderWithRouter';
import { About } from '../pages';

describe('Requisito 02', () => {
  // test('', () => {

  // });
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const title = screen.getByRole('heading', { name: /About Pokédex/i });

    expect(title).toBeVisible();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    renderWithRouter(<About />);

    const paragraphs = screen.getAllByText(/Pokémon/i);

    expect(paragraphs).toHaveLength(2);
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);

    const img = screen.getByAltText(/Pokédex/i);

    expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
