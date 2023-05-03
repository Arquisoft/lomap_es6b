import React from 'react';
import {render, screen,fireEvent} from '@testing-library/react';
import IconsSidebar from "./IconsSidebar";



describe('IconsSidebar', () => {
    it('calls handleLogout when the log out button is clicked',  () => {
        const handleSelectedButtonChangeMock = jest.fn();
        render(
            <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>
        );

        const myPlaces = screen.getByTestId('place-icon');

        fireEvent.click(myPlaces);
        expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith('MyPlaces');


    });
    it('calls handleLogout when the log out button is clicked',  () => {
        const handleSelectedButtonChangeMock = jest.fn();
        render(
            <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>
        );

        const myPlaces = screen.getByTestId('addplace-icon');

        fireEvent.click(myPlaces);
        expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith('AddPlace');
    });
    it('calls handleLogout when the log out button is clicked',  () => {
        const handleSelectedButtonChangeMock = jest.fn();
        render(
            <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>
        );

        const myPlaces = screen.getByTestId('groups-icon');

        fireEvent.click(myPlaces);
        expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith('Social');
    });
    it('calls handleLogout when the log out button is clicked',  () => {
        const handleSelectedButtonChangeMock = jest.fn();
        render(
            <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>
        );

        const myPlaces = screen.getByTestId('settings-icon');

        fireEvent.click(myPlaces);
        expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith('Settings');
    });
    it('calls handleLogout when the log out button is clicked',  () => {
        const handleSelectedButtonChangeMock = jest.fn();
        render(
            <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>
        );

        const myPlaces = screen.getByTestId('profile-icon');

        fireEvent.click(myPlaces);
        expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith('Profile');
    });




});
