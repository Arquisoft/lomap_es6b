import React from 'react';
import {render} from '@testing-library/react';
import TextCommentCard from "./TextCommentCard";



describe('TextCommentCard', () => {
  it('renders the TextCommentCard correctly', async () => {
    const commentMock = {
      posterWebId: 'https://uo282249.inrupt.net/profile/card#me',
      text: '3',
    }
    render(
        <TextCommentCard comment={commentMock}/>  );
  });


});
