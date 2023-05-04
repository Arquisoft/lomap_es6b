import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Header from "./Header";
import PlaceEntity from "../../entities/PlaceEntity";



describe('Header', () => {
  const placeMock = new PlaceEntity();
  const placeCategoriesMock = [
    { title: 'Bar' },
    { title: 'Restaurant' },
    { title: 'Shop' }
  ];

  it('renders the Header correctly', async () => {
    render(
        <Header setSelectedPlaceAutocomplete={placeMock} setSelectedFilters={[]} placeCategories={[placeCategoriesMock]}/>
    );

  });



});
