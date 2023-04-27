import React from 'react';
import { render, screen } from '@testing-library/react';
import AddPlaceSidebar from '../components/AddPlaceSidebar/AddPlaceSidebar';
test('testeando addPlace', () => {
  render(<AddPlaceSidebar />);
  const textPlaceName = screen.getByRole('textbox'  , {name: "Place Name"});
  //const texto = screen.getByLabelText('Place Name'); 

  //comprueba si se encuentra en el documento
  expect(textPlaceName).toBeInTheDocument();
});
