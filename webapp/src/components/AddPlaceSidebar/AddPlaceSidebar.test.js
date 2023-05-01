import { getByTestId, fireEvent, render, screen } from '@testing-library/react';
import AddPlaceSidebar from './AddPlaceSidebar';

describe('AddPlaceSidebar', () => {
  it('calls addPlace with the correct parameters when form is submitted', () => {
    const addPlaceMock = jest.fn();
    const props = {
      selectedPoint: { lat: 0, lng: 0 },
      places: [],
      setPlaces: jest.fn(),
      userWebId: 'https://example.com/profile/card#me',
      session: {},
    };
    render(<AddPlaceSidebar {...props} addPlace={addPlaceMock} />);

    const nameInput = screen.getByTestId('placeName');
    const descriptionInput = screen.getByTestId('placeDescription');
    const categorySelect = screen.getByTestId('placeCategory');
    const privacySelect = screen.getByTestId('placePrivacy');
    const submitButton = screen.getByTestId('addPlaceButton');


    fireEvent.change(nameInput.querySelector('input'), { target: { value: 'Test Place' } });
    console.log(nameInput);
    fireEvent.change(descriptionInput.querySelector('input'), { target: { value: 'Test description' } });
    fireEvent.change(categorySelect.querySelector('input'), { target: { value: 'Test category' } });
    fireEvent.change(privacySelect.querySelector('input'), { target: { value: 'Test privacy' } });

    fireEvent.click(submitButton);

    expect(addPlaceMock).toHaveBeenCalledWith({
      name: 'Test Place',
      description: 'Test description',
      latitude: 0,
      longitude: 0,
      category: 'Test category',
      privacy: 'Test privacy',
      textComments: [],
      imageComments: [],
      ratingComments: [],
      id: expect.any(String),
      webId: 'example.com',
    });
  });

  /*
  it('disables submit button when form is incomplete', () => {
    const props = {
      selectedPoint: { lat: 0, lng: 0 },
      places: [],
      setPlaces: jest.fn(),
      userWebId: 'https://example.com/profile/card#me',
      session: {},
    };
    const { getByRole } = render(<AddPlaceSidebar {...props} />);

    const submitButton = getByRole('button', { name: 'Add Place' });

    expect(submitButton).toBeDisabled();
  });
  */
})
