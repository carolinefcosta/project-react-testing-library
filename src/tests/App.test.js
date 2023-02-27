import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './services/renderWithRouter';

describe('Requisito 01', () => {
  test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /Home/i });
    const about = screen.getByRole('link', { name: /About/i });
    const favorites = screen.getByRole('link', { name: /Favorite Pokémon/i });

    expect(home).toBeVisible();
    expect(about).toBeVisible();
    expect(favorites).toBeVisible();
  });

  test('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /Home/i });
    expect(home).toBeVisible();
    userEvent.click(home);

    const { pathname } = history.location;
    expect(pathname).toBe('/');

    const homeTitle = screen.getByRole('heading', { name: /Encountered Pokémon/i });
    expect(homeTitle).toBeVisible();
  });

  test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: /About/i });
    expect(about).toBeVisible();
    userEvent.click(about);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(aboutTitle).toBeVisible();
  });

  test('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const favorites = screen.getByRole('link', { name: /Favorite Pokémon/i });
    expect(favorites).toBeVisible();
    userEvent.click(favorites);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');

    const favoritesTitle = screen.getByRole('heading', { name: /Favorite Pokémon/i });
    expect(favoritesTitle).toBeVisible();
  });

  test('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);

    const urlInvalid = '/inexistente';
    act(() => {
      history.push(urlInvalid);
    });

    const pageNotFound = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(pageNotFound).toBeVisible();
  });
});
