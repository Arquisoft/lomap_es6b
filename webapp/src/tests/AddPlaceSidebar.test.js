import React from 'react';
import {fireEvent, getByRole, render, screen, waitFor, within} from '@testing-library/react';
import AddPlaceSidebar from '../components/AddPlaceSidebar/AddPlaceSidebar';
import UserEvent from "@testing-library/user-event";
import { getRoles } from '@testing-library/dom';
test('testeando addPlace', async () => {
  render(<AddPlaceSidebar/>);

  //Definimos los elementos
  const textPlaceName = screen.getByRole('textbox', {name: "Place Name"});
  const textPlaceDescription = screen.getByRole('textbox', {name: "Place Description"});
  const cbCategory = screen.getByTitle('Place Category');
  const cbPrivacy = screen.getByTitle('Place Privacy');
  const btAddPlace = screen.getByTitle('Add Place Button');

  //const texto = screen.getByLabelText('Place Name');

  //Comprobamos si los elementos están en la página
  expect(textPlaceName).toBeInTheDocument();
  expect(textPlaceDescription).toBeInTheDocument();
  expect(cbCategory).toBeInTheDocument();
  expect(cbPrivacy).toBeInTheDocument();
  expect(btAddPlace).toBeInTheDocument();

});

test('todos las categorías se muestran en el combobox', async () => {

      render(<AddPlaceSidebar />);

      const cbCategory = screen.getByTitle('Place Category');

      fireEvent.mouseDown(cbCategory);



    const option = screen.getByRole("option", {name:"Bar"});

      fireEvent.click(option);

      expect(cbCategory.value).toBe("Bar");

    }
);
