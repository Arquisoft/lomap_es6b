import React from 'react';
import {render} from '@testing-library/react';
import RatingCommentCard from "./RatingCommentCard";



describe('RatingCommentCard', () => {
  it('renders the RatingCommentCard correctly', async () => {
    const ratingMock = {
      posterWebId: 'https://uo282249.inrupt.net/profile/card#me',
      value: 3,
    }
    render(
        <RatingCommentCard rating={ratingMock}/>  );

  });


});
