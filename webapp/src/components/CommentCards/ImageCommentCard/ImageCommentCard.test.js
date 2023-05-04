import React from 'react';
import {render} from '@testing-library/react';
import ImageCommentCard from "./ImageCommentCard";



describe('ImageCommentCard', () => {
  it('renders the ImageCommentCard correctly', async () => {
    const imageMock = {
      posterWebId: 'https://uo282249.inrupt.net/profile/card#me',
      text: 'https://allma.si/blog/wp-content/uploads/2023/04/fetch-and-display-json-in-react.png',
    }
    render(
        <ImageCommentCard image={imageMock}/>  );

  });


});
