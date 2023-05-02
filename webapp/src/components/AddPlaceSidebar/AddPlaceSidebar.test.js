import { getByTestId, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddPlaceSidebar from './AddPlaceSidebar';
import * as solidapi from '../../solidapi/solidAdapter'


test('check renders', async () => {
  await render(<AddPlaceSidebar />);
  let addPointButton = screen.getByTestId("addPlaceButton");
  expect(addPointButton).toBeInTheDocument();
});


test('tries to write a Place without categgory', async () => {
 

  const handleClickOpenMock = jest.fn();
 
  let {container, getByText} = render(<AddPlaceSidebar handleClickOpenMock={handleClickOpenMock} />);

  //write the name
  const nameInput = screen.getByTestId("placeName");
  const inputName = nameInput.querySelector("input");
  fireEvent.change(inputName, { target: { value: "test name" } });
  expect(inputName.value).toBe("test name");

   //write the description
   const descriptionInput = screen.getByTestId("placeDescription");
   const inputDescription = descriptionInput.querySelector("textarea");
   fireEvent.change(inputDescription, { target: { value: "test description" } });//innerText
   expect(inputDescription.value).toBe("test description");

   const button = screen.getByTestId("addPlaceButton");
   fireEvent.click(button);
   //no se llama porque hasta que no rellene el Category, el boton está bloqueado
   expect(handleClickOpenMock).not.toHaveBeenCalled();


  
});