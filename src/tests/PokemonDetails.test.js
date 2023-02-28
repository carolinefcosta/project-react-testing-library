import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
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

  test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /More details/i });
    expect(linkDetails).toBeVisible();
    userEvent.click(linkDetails);

    const pikachuHeadingDetails = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
    expect(pikachuHeadingDetails).toBeVisible();

    const imgLocation = screen.getAllByAltText(/Pikachu location/i);
    expect(imgLocation[0]).toBeVisible();
    expect(imgLocation[0].src).toContain('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgLocation[1]).toBeVisible();
    expect(imgLocation[1].src).toContain('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('Teste se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    const { history } = renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);
    act(() => {
      history.push('/pokemon/25');
    });

    const pokemonFavorite = screen.getByLabelText(/Pokémon favoritado/i);
    expect(pokemonFavorite).toBeVisible();
    userEvent.click(pokemonFavorite);
    act(() => {
      history.push('/favorites');
    });

    const namePokemonFavorite = screen.getByText(/Pikachu/i);
    expect(namePokemonFavorite).toBeVisible();
  });
});
