import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './services/renderWithRouter';
import { FavoritePokemon } from '../pages';
// import App from '../App';

describe('Requisito 03', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<FavoritePokemon />);

    const noFavorite = screen.getByText(/No favorite Pokémon found/i);

    expect(noFavorite).toBeVisible();
  });

  // test('Teste se apenas são exibidos os Pokémon favoritados', () => {
  //   const { history } = renderWithRouter(<App />);

  //   const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
  //   userEvent.click(linkMoreDetails);

  //   const pokemonFavorite = screen.getByLabelText(/Pokémon favoritado/i);
  //   userEvent.click(pokemonFavorite);
  //   history.push('/favorites');

  //   const namePokemon = screen.getByTestId('pokemon-name');
  //   expect(namePokemon).toBeVisible();
  // });
});
