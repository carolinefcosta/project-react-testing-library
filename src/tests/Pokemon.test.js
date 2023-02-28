import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from './services/renderWithRouter';
import App from '../App';

describe('Requisito 06', () => {
  test('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId(/pokemon-name/i);
    expect(name).toHaveTextContent(/Pikachu/i);

    const type = screen.getAllByTestId(/pokemon-type/i);
    expect(type[0]).toHaveTextContent(/Electric/i);

    const weight = screen.getByTestId(/pokemon-weight/i);
    expect(weight).toHaveTextContent(/Average weight: 6.0 kg/i);

    const img = screen.getByAltText(/Pikachu sprite/i);
    expect(img.src).toContain('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });
});
