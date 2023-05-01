import React from 'react';
import { render } from '@testing-library/react';
import MyPlacesSidebar from './MyPlacesSidebar';

describe('MyPlacesSidebar', () => {
  const mockPlaces = [
    { _id: '1', name: 'Place 1' },
    { _id: '2', name: 'Place 2' },
    { _id: '3', name: 'Place 3' },
  ];
  const mockProps = {
    places: mockPlaces,
    setSelectedPlaceMyPlaces: jest.fn(),
    deletePlace: jest.fn(),
    session: {},
    showDeleteButton: true,
    setSelectedPlaceComment: jest.fn(),
    setSelectedButton: jest.fn(),
  };

  //funciona correctamente
  it('renderiza una lista de lugares', () => {
    const { getByText } = render(<MyPlacesSidebar {...mockProps} />);
    mockPlaces.forEach((place) => {
      expect(getByText(place.name)).toBeInTheDocument();
    });
  });

  it('Se renderiza una PlaceCard para cada lugar de prueba', () => {
    const { getAllByTestId } = render(<MyPlacesSidebar {...mockProps} />);
    const placeCards = getAllByTestId('PermIdentityIcon');
    expect(placeCards.length).toEqual(mockPlaces.length);
  });

});
