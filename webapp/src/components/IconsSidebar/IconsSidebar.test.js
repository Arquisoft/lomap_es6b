import React from 'react';
import {render, screen,fireEvent} from '@testing-library/react';
import IconsSidebar from "./IconsSidebar";

describe('IconsSidebar', () => {
  const handleSelectedButtonChangeMock = jest.fn();
  
  const testIcon = (iconTestId, expectedButtonName) => {
    const icon = screen.getByTestId(iconTestId);
    fireEvent.click(icon);
    expect(handleSelectedButtonChangeMock).toHaveBeenCalledWith(expectedButtonName);
  };

  beforeEach(() => {
    render(<IconsSidebar handleSelectedButtonChange={handleSelectedButtonChangeMock}/>);
  });

  it('calls handleSelectedButtonChangeMock when clicking on MyPlaces button', () => {
    testIcon('place-icon', 'MyPlaces');
  });

  it('calls handleSelectedButtonChangeMock when clicking on AddPlace button', () => {
    testIcon('addplace-icon', 'AddPlace');
  });

  it('calls handleSelectedButtonChangeMock when clicking on Social button', () => {
    testIcon('groups-icon', 'Social');
  });

  it('calls handleSelectedButtonChangeMock when clicking on Settings button', () => {
    testIcon('settings-icon', 'Settings');
  });

  it('calls handleSelectedButtonChangeMock when clicking on Profile button', () => {
    testIcon('profile-icon', 'Profile');
  });
});
