import React from 'react';
import {render} from '@testing-library/react';
import SocialSidebar from "./SocialSidebar";



describe('SocialSidebar', () => {
  it('calls showFriends when opening SocialSidebar', async () => {
    const showFriendsMock = jest.fn();
    const userWebIdMock = 'https://uo282249.inrupt.net/profile/card#me';
    render(
        <SocialSidebar showFriendsMock={showFriendsMock} userWeb={userWebIdMock}/>
    );
    expect(showFriendsMock).toHaveBeenCalled();

  });


});
