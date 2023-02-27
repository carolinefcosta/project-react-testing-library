import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './services/renderWithRouter';
import { FavoritePokemon } from '../pages';
import App from '../App';

describe('Requisito 03', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<FavoritePokemon />);

    const noFavorite = screen.getByText(/No favorite Pokémon found/i);

    expect(noFavorite).toBeVisible();
  });

  test('Teste se apenas são exibidos os Pokémon favoritados', () => {
    const { history } = renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);
    act(() => {
      history.push('/pokemon/4');
    });

    const pokemonFavorite = screen.getByLabelText(/Pokémon favoritado/i);
    expect(pokemonFavorite).toBeVisible();
    userEvent.click(pokemonFavorite);
    act(() => {
      history.push('/favorites');
    });

    const namePokemonFavorite = screen.getByText(/Charmander/i);
    expect(namePokemonFavorite).toBeVisible();
  });
});
