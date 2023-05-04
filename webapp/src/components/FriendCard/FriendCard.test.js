import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import FriendCard from "./FriendCard";

describe('FriendCard', () => {
  const setSelectedFriendMock = jest.fn();
  const setSelectedButtonMock = jest.fn();
  const handleClickOpenMock = jest.fn();

  const sessionMock = {info: {webId: 'https://uo282249.inrupt.net/profile/card#me'}};
  const friendMock = {friendURL: 'https://uo283840.inrupt.net/profile/card#me'};
  const userWebIdMock = 'https://uo282249.inrupt.net/profile/card#me';

  it('calls setSelectedFriend, setSelectedButton and handleClickOpen when map and friend buttons are clicked', async () => {
    render(
        <FriendCard setSelectedFriend={setSelectedFriendMock} setSelectedButton={setSelectedButtonMock}
                    userWebId={userWebIdMock} friend={friendMock} session={sessionMock}
                    handleClickOpenMock={handleClickOpenMock}
        />
    );
    await waitFor(() => {
        expect(screen.getByTestId("map-button")).toBeInTheDocument();
    }, { timeout: 10000 });
    const mapBt = screen.getByTestId("map-button");
    fireEvent.click(mapBt);
    expect(setSelectedFriendMock).toHaveBeenCalled();
    expect(setSelectedButtonMock).toHaveBeenCalled();

    const deleteBt = screen.getByTestId("delete-friend");
    fireEvent.click(deleteBt);
    expect(handleClickOpenMock).toHaveBeenCalled();

  }, 10000);



});
