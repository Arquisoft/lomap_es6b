import React from 'react';
import { render, screen, prettyDOM , waitFor, fireEvent, within} from '@testing-library/react';
import FilterByBar from './FilterByBar';

const placeCategories = [
  { id: 1, title: 'Category 1' },
  { id: 2, title: 'Category 2' },
  { id: 3, title: 'Category 3' },
];

test('renders filter by bar', () => {
  const setSelectedFilters = jest.fn();
  render(<FilterByBar setSelectedFilters={setSelectedFilters} placeCategories={placeCategories} />);
  const filterByBar = screen.getByTestId('filtroTest');
  expect(filterByBar).toBeInTheDocument();
});

test('calls setSelectedFilters when an option is selected', async () => {
  const setSelectedFilters = jest.fn();
  render(<FilterByBar setSelectedFilters={setSelectedFilters} placeCategories={placeCategories} />);
  const filterByBar = screen.getByTestId('autocompleteFilter');

    // Encontrar el botón de despliegue
  const button = within(filterByBar).getByRole('button', { name: /Open/i });
  fireEvent.click(button);
  
  // Esperar a que aparezca el cuadro de diálogo
  const popper = screen.getByRole('listbox', { hidden: true });

   // Buscar elementos dentro del cuadro de diálogo
   const option =  within(popper).getByText('Category 1');
   expect(option).toBeInTheDocument();
});