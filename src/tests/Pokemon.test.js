import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
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

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /More details/i });
    expect(linkDetails).toBeVisible();

    userEvent.click(linkDetails);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });

  test('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /More details/i });
    expect(linkDetails).toBeVisible();
    userEvent.click(linkDetails);
    act(() => {
      history.push('/pokemon/25');
    });

    const titleDetails = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(titleDetails).toBeVisible();
  });

  test('Teste se existe um ícone de estrela nos Pokémon favoritados', () => {
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

    const imgFavorite = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(imgFavorite).toBeVisible();
    expect(imgFavorite.src).toContain('/star-icon.svg');
  });
});
