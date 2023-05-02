import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import PlaceEntity from "./PlaceEntity";



describe('PlaceEntity', () => {
  it('creates a place entity', async () => {
    new PlaceEntity(
        '312989012390832',
        'Restaurant',
        'La Tagliatella',
        'Italian restaurant',
        '40.4165000',
        '-3.7025600',
        'https://uo282249.inrupt.net/profile/card#me',
        [],
        [],
        []
    );
  });


});
