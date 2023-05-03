import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import ProfileSideBar from "./ProfileSideBar";



describe('ProfileSideBar', () => {
  it('calls handleLogout when the log out button is clicked', async () => {
    const handleLogoutMock = jest.fn();
    const userWebIdMock = 'https://uo282249.inrupt.net/profile/card#me';
    const sessionMock = {info: {webId: 'https://uo282249.inrupt.net/profile/card#me'}, logout: ()=>""};
    render(
        <ProfileSideBar userWebId={userWebIdMock} session={sessionMock} handleLogoutMock={handleLogoutMock}/>
    );
    // await waitFor(() => {
    //   expect(screen.getByTestId('logout-button')).toBeInTheDocument();
    // }, { timeout: 10000 });
    await waitFor(() => {
      expect(screen.getByTestId("logout-button")).toBeInTheDocument();
    }, { timeout: 10000 });
    const logoutButton = screen.getByTestId('logout-button');
    fireEvent.click(logoutButton);
    expect(handleLogoutMock).toHaveBeenCalled();
  });

});
