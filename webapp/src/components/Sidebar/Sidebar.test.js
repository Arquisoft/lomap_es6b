import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Sidebar from "./Sidebar";



describe('Sidebar', () => {
  it('calls handleSelectedButtonChange when clicking on the sidebar buttons', async () => {
    const handleSelectedButtonChangeMock = jest.fn();
    const userWebIdMock = 'https://uo282249.inrupt.net/profile/card#me';
    render(
        <Sidebar handleSelectedButtonChangeMock={handleSelectedButtonChangeMock}/>
    );
    expect(screen.getByTestId('icons-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('details-sidebar')).toBeInTheDocument();


  });


});
