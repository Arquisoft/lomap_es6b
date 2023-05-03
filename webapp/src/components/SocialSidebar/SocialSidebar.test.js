import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import SocialSidebar from "./SocialSidebar";



describe('SocialSidebar', () => {
  it('calls handleClickOpen when the delete all data button is clicked', async () => {
    const showFriendsMock = jest.fn();
    const userWebIdMock = 'https://uo282249.inrupt.net/profile/card#me';
    render(
        <SocialSidebar showFriendsMock={showFriendsMock} userWeb={userWebIdMock}/>
    );
    expect(showFriendsMock).toHaveBeenCalled();

  });


});
