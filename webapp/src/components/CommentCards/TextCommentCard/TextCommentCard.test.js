import React from 'react';
import {render} from '@testing-library/react';
import TextCommentCard from "./TextCommentCard";



describe('TextCommentCard', () => {
  it('calls handleLogout when the log out button is clicked', async () => {
    const commentMock = {
      posterWebId: 'https://uo282249.inrupt.net/profile/card#me',
      text: '3',
    }
    render(
        <TextCommentCard comment={commentMock}/>  );
  });


});
