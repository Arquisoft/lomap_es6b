import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Header from "./Header";
import PlaceEntity from "../../entities/PlaceEntity";



describe('Header', () => {
  it('calls handleLogout when the log out button is clicked', async () => {
    const placeMock = new PlaceEntity();
    const placeCategoriesMock = [
          { title: 'Bar' },
          { title: 'Restaurant' },
          { title: 'Shop' }
        ];
    render(
        <Header setSelectedPlaceAutocomplete={placeMock} setSelectedFilters={[]} placeCategories={[placeCategoriesMock]}/>
    );

  });



});
