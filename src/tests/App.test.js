import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import testData from '../../cypress/mocks/testData';

const eleven = 11;
const four = 4;
const three = 3;
describe('Testanto tudo', () => {
  test('I am your test', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });
    render(<App />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    const linkElement = screen.getByRole('heading',
      { name: /filter by name/i, level: 5 });
    expect(linkElement).toBeInTheDocument();

    const inputElement = screen.getByTestId('name-filter');
    expect(inputElement).toBeInTheDocument();

    expect(screen.getAllByRole('row')).toHaveLength(eleven);

    userEvent.type(inputElement, 'Tatooine');
    const tableElement = screen.getAllByRole('row');
    expect(tableElement).toHaveLength(2);
  });
  test('testando selects', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });
    render(<App />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const columnSelect = screen.getByTestId('column-filter');
    const comparisonSelect = screen.getByTestId('comparison-filter');
    const valueinput = screen.getByTestId('value-filter');
    const buttonElement = screen.getByRole('button', { name: /filtrar/i });

    expect(columnSelect).toBeInTheDocument();
    expect(comparisonSelect).toBeInTheDocument();
    expect(valueinput).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

    userEvent.selectOptions(columnSelect, 'orbital_period');
    userEvent.selectOptions(comparisonSelect, 'maior que');
    userEvent.type(valueinput, '500');
    userEvent.click(buttonElement);

    const tableElement = screen.getAllByRole('row');
    expect(tableElement).toHaveLength(four);

    userEvent.selectOptions(columnSelect, 'diameter');
    userEvent.selectOptions(comparisonSelect, 'menor que');
    userEvent.type(valueinput, '11000');
    userEvent.click(buttonElement);

    expect(screen.getAllByRole('row')).toHaveLength(three);

    userEvent.selectOptions(columnSelect, 'rotation_period');
    userEvent.selectOptions(comparisonSelect, 'igual a');
    userEvent.type(valueinput, '24');
    userEvent.click(buttonElement);

    expect(screen.getAllByRole('row')).toHaveLength(2);
  });
  test('testando botões de excluir', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });
    render(<App />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const columnSelect = screen.getByTestId('column-filter');
    const comparisonSelect = screen.getByTestId('comparison-filter');
    const valueinput = screen.getByTestId('value-filter');
    const buttonElement = screen.getByRole('button', { name: /filtrar/i });

    userEvent.selectOptions(columnSelect, 'orbital_period');
    userEvent.selectOptions(comparisonSelect, 'maior que');
    userEvent.type(valueinput, '500');
    userEvent.click(buttonElement);

    const deleteButton = screen.getByRole('button', { name: /excluir/i });
    expect(deleteButton).toBeInTheDocument();

    expect(screen.getAllByRole('row')).toHaveLength(four);

    userEvent.click(deleteButton);
    expect(screen.getAllByRole('row')).toHaveLength(eleven);
  });
  test('testando botão de excluir todos filtros', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });
    render(<App />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const columnSelect = screen.getByTestId('column-filter');
    const comparisonSelect = screen.getByTestId('comparison-filter');
    const valueinput = screen.getByTestId('value-filter');
    const buttonElement = screen.getByRole('button', { name: /filtrar/i });

    userEvent.selectOptions(columnSelect, 'orbital_period');
    userEvent.selectOptions(comparisonSelect, 'maior que');
    userEvent.type(valueinput, '500');
    userEvent.click(buttonElement);

    expect(screen.getAllByRole('row')).toHaveLength(four);

    userEvent.selectOptions(columnSelect, 'diameter');
    userEvent.selectOptions(comparisonSelect, 'menor que');
    userEvent.type(valueinput, '11000');
    userEvent.click(buttonElement);

    expect(screen.getAllByRole('row')).toHaveLength(three);

    userEvent.selectOptions(columnSelect, 'rotation_period');
    userEvent.selectOptions(comparisonSelect, 'igual a');
    userEvent.type(valueinput, '24');
    userEvent.click(buttonElement);

    expect(screen.getAllByRole('row')).toHaveLength(2);

    const deleteAllButton = screen.getByRole('button', { name: /remover todas/i });
    expect(deleteAllButton).toBeInTheDocument();

    userEvent.click(deleteAllButton);
    expect(screen.getAllByRole('row')).toHaveLength(eleven);
  });
});
