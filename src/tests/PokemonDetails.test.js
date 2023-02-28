import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from './services/renderWithRouter';
import App from '../App';

describe('Requisito 07', () => {
  test('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /More details/i });
    expect(linkDetails).toBeVisible();
    userEvent.click(linkDetails);

    const pikachuDetails = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(pikachuDetails).toBeVisible();
    expect(linkDetails).not.toBeVisible();

    const summary = screen.getByRole('heading', { name: /Summary/i });
    expect(summary).toBeVisible();

    const paragraph = screen.getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat/i);
    expect(paragraph).toBeVisible();
  });
});
