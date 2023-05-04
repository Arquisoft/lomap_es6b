import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import AddCommentButton from "./AddCommentButton";



describe('AddCommentButton', () => {
  it('calls handleToggle, handleMenuItemClick, handleClose and handleClickOpen when adding a comment', async () => {
    const handleToggleMock = jest.fn();
    const handleMenuItemClickMock = jest.fn();
    const handleCloseMock = jest.fn();
    const handleClickOpenMock = jest.fn();
    render(
        <AddCommentButton handleToggleMock={handleToggleMock} handleMenuItemClickMock={handleMenuItemClickMock}
                          handleCloseMock={handleCloseMock} handleClickOpen={handleClickOpenMock}/>
    );
/*    await waitFor(() => {
      expect(screen.getByTestId("botonMenuComment")).toBeInTheDocument();
    }, { timeout: 10000 });*/

    const botonMenuComment = screen.getByTestId("botonMenuComment");
    fireEvent.click(botonMenuComment);
    expect(handleToggleMock).toHaveBeenCalled();

    const addImageItem = screen.getByTestId("Add an image");
    fireEvent.click(addImageItem);
    expect(handleMenuItemClickMock).toHaveBeenCalled();

    const addCommentButton = screen.getByTestId("addCommentButton");
    fireEvent.click(addCommentButton);
    expect(handleClickOpenMock).toHaveBeenCalled();
  });

  /*it('debería aparecer el botón de delete all', () => {
    render(<SettingsSideBar />);
    const deleteButton = screen.getByTestId('deletealldata-button');
    expect(deleteButton).toBeInTheDocument();

  });*/

});
