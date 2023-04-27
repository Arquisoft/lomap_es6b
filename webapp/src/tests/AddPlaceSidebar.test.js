import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import AddPlaceSidebar from '../components/AddPlaceSidebar/AddPlaceSidebar';

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

    const cbCategory = screen.getByTestId('select-categories');
    fireEvent.mouseDown(cbCategory.childNodes[0]);

      await waitFor(()=> {
          const option = screen.getByTestId("Bar");
          fireEvent.click(option);
      });

    //mayor avance:
    // let ct = cbCategory.childNodes[0]
    // console.log(ct)
    // let ca = ct.childNodes[0].children;
    // expect(ct.childNodes[0].children).toBe("Bar");





    //   fireEvent.mouseDown(cbCategory);
    //   console.debug(screen.queryAllByRole("listbox"))
    // const listbx = screen.getByRole("listbox");
    //
    // const option = screen.queryAllByTestId(/.*/);
    // console.debug(option);
    //   fireEvent.click(option);
    //
    //   expect(getByText("Bar").toBeInTheDocument();
    //
     }
);
