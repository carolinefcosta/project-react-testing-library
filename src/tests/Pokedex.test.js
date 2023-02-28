import React from 'react';
import { getAllByRole, getByRole, getByText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './services/renderWithRouter';
import App from '../App';

describe('Requisito 05', () => {
  // const pokemonList = [
  //   'Pikachu', 'Charmander', 'Caterpie', 'Ekans', 'Alakazam', 'Mew', 'Rapidash', 'Snorlax', ''];

  test('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { name: /Encountered Pokémon/i });

    expect(title).toBeVisible();
  });

  test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);

    const pokemon1 = screen.getByText(/Pikachu/i);
    expect(pokemon1).toBeVisible();

    const button = screen.getByRole('button', { name: /Próximo Pokémon/i });
    expect(button).toBeVisible();

    userEvent.click(button);
    const pokemon2 = screen.getByText(/Charmander/i);
    expect(pokemon2).toBeVisible();

    userEvent.click(button);
    const pokemon3 = screen.getByText(/Caterpie/i);
    expect(pokemon3).toBeVisible();

    userEvent.click(button);
    const pokemon4 = screen.getByText(/Ekans/i);
    expect(pokemon4).toBeVisible();

    userEvent.click(button);
    const pokemon5 = screen.getByText(/Alakazam/i);
    expect(pokemon5).toBeVisible();

    userEvent.click(button);
    const pokemon6 = screen.getByText(/Mew/i);
    expect(pokemon6).toBeVisible();

    userEvent.click(button);
    const pokemon7 = screen.getByText(/Rapidash/i);
    expect(pokemon7).toBeVisible();

    userEvent.click(button);
    const pokemon8 = screen.getByText(/Snorlax/i);
    expect(pokemon8).toBeVisible();

    userEvent.click(button);
    const pokemon9 = screen.getByText(/Dragonair/i);
    expect(pokemon9).toBeVisible();

    userEvent.click(button);
    const pokemon10 = screen.getByText(/Pikachu/i);
    expect(pokemon10).toBeVisible();
  });

  test('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);

    const pokemonVisible = screen.getAllByTestId(/pokemon-name/i);
    expect(pokemonVisible).toHaveLength(1);
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /All/i });
    expect(buttonAll).toBeVisible();

    const buttons = screen.getAllByTestId(/pokemon-type-button/i);
    expect(buttons).toHaveLength(7);

    const buttonFire = screen.getByRole('button', { name: /Fire/i });
    userEvent.click(buttonFire);
    const pokemonFire1 = screen.getByText(/Charmander/i);
    expect(pokemonFire1).toBeVisible();
    expect(buttonAll).toBeVisible();

    const buttonNext = screen.getByTestId(/next-pokemon/i);
    userEvent.click(buttonNext);
    const pokemonFire2 = screen.getByText(/Rapidash/i);
    expect(pokemonFire2).toBeVisible();
    expect(buttonAll).toBeVisible();

    const buttonPsychic = screen.getByRole('button', { name: /Psychic/i });
    userEvent.click(buttonPsychic);
    const pokemonPsychic1 = screen.getByText(/Alakazam/i);
    expect(pokemonPsychic1).toBeVisible();
    expect(buttonAll).toBeVisible();

    userEvent.click(buttonNext);
    const pokemonPsychic2 = screen.getByText(/Mew/i);
    expect(pokemonPsychic2).toBeVisible();
    expect(buttonAll).toBeVisible();
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /All/i });
    expect(buttonAll).toBeVisible();
    userEvent.click(buttonAll);
    const pokemon1 = screen.getByText(/Pikachu/i);
    expect(pokemon1).toBeVisible();

    const button = screen.getByRole('button', { name: /Próximo Pokémon/i });
    expect(button).toBeVisible();

    userEvent.click(button);
    const pokemon2 = screen.getByText(/Charmander/i);
    expect(pokemon2).toBeVisible();

    userEvent.click(button);
    const pokemon3 = screen.getByText(/Caterpie/i);
    expect(pokemon3).toBeVisible();

    userEvent.click(button);
    const pokemon4 = screen.getByText(/Ekans/i);
    expect(pokemon4).toBeVisible();

    userEvent.click(button);
    const pokemon5 = screen.getByText(/Alakazam/i);
    expect(pokemon5).toBeVisible();

    userEvent.click(button);
    const pokemon6 = screen.getByText(/Mew/i);
    expect(pokemon6).toBeVisible();

    userEvent.click(button);
    const pokemon7 = screen.getByText(/Rapidash/i);
    expect(pokemon7).toBeVisible();

    userEvent.click(button);
    const pokemon8 = screen.getByText(/Snorlax/i);
    expect(pokemon8).toBeVisible();

    userEvent.click(button);
    const pokemon9 = screen.getByText(/Dragonair/i);
    expect(pokemon9).toBeVisible();

    userEvent.click(button);
    const pokemon10 = screen.getByText(/Pikachu/i);
    expect(pokemon10).toBeVisible();
  });
});
