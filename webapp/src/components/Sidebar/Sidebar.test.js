import React from 'react';
import {render, screen} from '@testing-library/react';
import Sidebar from "./Sidebar";



describe('Sidebar', () => {
  it('expects IconsSidebar and DetailsSidebar to be rendered', async () => {
    const handleSelectedButtonChangeMock = jest.fn();
    render(
        <Sidebar handleSelectedButtonChangeMock={handleSelectedButtonChangeMock}/>
    );
    expect(screen.getByTestId('icons-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('details-sidebar')).toBeInTheDocument();

  });


});
