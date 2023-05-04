import { fireEvent, render, screen } from '@testing-library/react';
import AddPlaceSidebar from './AddPlaceSidebar';

function fillPlaceData(name, description) {
  const nameInput = screen.getByTestId('placeName');
  const descriptionInput = screen.getByTestId('placeDescription');

  fireEvent.change(nameInput.querySelector('input'), { target: { value: name } });
  fireEvent.change(descriptionInput.querySelector('textarea'), { target: { value: description } });
}

test('check renders', async () => {
  render(<AddPlaceSidebar />);
  let addPointButton = screen.getByTestId('addPlaceButton');
  expect(addPointButton).toBeInTheDocument();
});

test('tries to write a Place without category', async () => {
  const handleClickOpenMock = jest.fn();
  render(<AddPlaceSidebar handleClickOpenMock={handleClickOpenMock} />);

  fillPlaceData('test name', 'test description');

  const button = screen.getByTestId('addPlaceButton');
  fireEvent.click(button);

  expect(handleClickOpenMock).not.toHaveBeenCalled();
});

test('tries to write a Place correctly', async () => {
  const handleClickOpenMock = jest.fn();
  render(<AddPlaceSidebar handleClickOpenMock={handleClickOpenMock} />);

  fillPlaceData('test name', 'test description');
});
