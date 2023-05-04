import React from 'react';
import { render, screen } from '@testing-library/react';
import MyPlacesSidebar from './MyPlacesSidebar';


describe('MyPlacesSidebar', () => {
  const mockPlaces = [
    { _id: '1', name: 'Place 1' },
    { _id: '2', name: 'Place 2' },
    { _id: '3', name: 'Place 3' },
  ];
 
  const mockSession = {
    info: jest.fn().mockResolvedValue({ isLoggedIn: true }), // Simula el resultado de la autenticación
    logout: jest.fn(), // Simula el cierre de sesión
  };
  
  const mockProps = {
    places: mockPlaces,
    setSelectedPlaceMyPlaces: jest.fn(),
    deletePlace: jest.fn(),
    session: mockSession, // Pasa el objeto simulado como una propiedad
    showDeleteButton: true,
    setSelectedPlaceComment: jest.fn(),
    setSelectedButton: jest.fn(),
  };
  
  it('renders a list of places', () => {
    render(<MyPlacesSidebar {...mockProps} />);
    mockPlaces.forEach((place) => {
      expect(screen.getByText(place.name)).toBeInTheDocument();
    });
  });


  it('does not show a loading message when isLoading is false', () => {
    render(<MyPlacesSidebar {...mockProps} />);
    expect(screen.queryByRole('progressbar')).toBeNull();
  });


  it('shows the places correctly when props.places has values', () => {
    render(<MyPlacesSidebar {...mockProps} />);
    mockProps.places.forEach((place) => {
      expect(screen.getByText(place.name)).toBeInTheDocument();
    });
  });

});
