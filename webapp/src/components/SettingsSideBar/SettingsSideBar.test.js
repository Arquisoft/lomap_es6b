import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import SettingsSideBar from "./SettingsSideBar";



describe('SettingsSideBar', () => {
  it('calls handleClickOpen when the delete all data button is clicked', () => {
    const handleClickOpenMock = jest.fn();
    const handleSnackbarOpenMock = jest.fn();
    const handleSnackbarCloseMock = jest.fn();
    const setPlacesMock = jest.fn();
    const sessionMock = {info: {webId: 'https://example.com/profile/card#me'}};
    render(
        <SettingsSideBar setPlaces={setPlacesMock} session={sessionMock} handleClickOpenMock={handleClickOpenMock} handleSnackbarOpenMock={handleSnackbarOpenMock}
                         handleSnackbarCloseMock={handleSnackbarCloseMock}/>
    );
    const deleteAllDataButton = screen.getByTestId('deletealldata-button');
    fireEvent.click(deleteAllDataButton);
    expect(handleClickOpenMock).toHaveBeenCalled();
    const deleteConfirmButton = screen.getByTestId('confirm-deletealldata');
    fireEvent.click(deleteConfirmButton);
    expect(handleSnackbarOpenMock).toHaveBeenCalled();

  });

  /*it('debería aparecer el botón de delete all', () => {
    render(<SettingsSideBar />);
    const deleteButton = screen.getByTestId('deletealldata-button');
    expect(deleteButton).toBeInTheDocument();

  });*/

});
