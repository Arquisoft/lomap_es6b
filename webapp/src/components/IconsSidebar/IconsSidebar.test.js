import React from 'react';
import {render, screen,fireEvent} from '@testing-library/react';
import IconsSidebar from "./IconsSidebar";



describe('IconsSidebar', () => {
    it('calls handleSelectedButtonChangeMock when clicking on MyPlaces button',  () => {
        const handleSelectedButtonChangeMock = jest.fn();
        render(
            <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>
        );

        const myPlaces = screen.getByTestId('place-icon');

        fireEvent.click(myPlaces);
        expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith('MyPlaces');


    });
    it('calls handleSelectedButtonChangeMock when clicking on AddPlace button',  () => {
        const handleSelectedButtonChangeMock = jest.fn();
        render(
            <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>
        );

        const myPlaces = screen.getByTestId('addplace-icon');

        fireEvent.click(myPlaces);
        expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith('AddPlace');
    });
    it('calls handleSelectedButtonChangeMock when clicking on Social button',  () => {
        const handleSelectedButtonChangeMock = jest.fn();
        render(
            <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>
        );

        const myPlaces = screen.getByTestId('groups-icon');

        fireEvent.click(myPlaces);
        expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith('Social');
    });
    it('calls handleSelectedButtonChangeMock when clicking on Settings button',  () => {
        const handleSelectedButtonChangeMock = jest.fn();
        render(
            <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>
        );

        const myPlaces = screen.getByTestId('settings-icon');

        fireEvent.click(myPlaces);
        expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith('Settings');
    });
    it('calls handleSelectedButtonChangeMock when clicking on Profile button',  () => {
        const handleSelectedButtonChangeMock = jest.fn();
        render(
            <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>
        );

        const myPlaces = screen.getByTestId('profile-icon');

        fireEvent.click(myPlaces);
        expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith('Profile');
    });




});
