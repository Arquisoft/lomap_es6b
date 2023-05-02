import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import CommentsSidebar from "./CommentsSidebar";



describe('CommentsSidebar', () => {
  it('calls handleLogout when the log out button is clicked', async () => {
    const showTextCommentsMock = jest.fn();
    const showRatingCommentsMock = jest.fn();
    render(
        <CommentsSidebar showTextCommentsMock={showTextCommentsMock} showRatingCommentsMock={showRatingCommentsMock}/>
    );
/*    await waitFor(() => {
      expect(screen.getByTestId("botonMenuComment")).toBeInTheDocument();
    }, { timeout: 10000 });*/


    expect(showTextCommentsMock).toHaveBeenCalled();


    /*const comboBox = screen.getByTestId("Type of comments to show");
    fireEvent.click(comboBox);

    const ratingItem = screen.getByTestId("rating-item");
    fireEvent.click(ratingItem);
    expect(showRatingCommentsMock).toHaveBeenCalled();
*/


  });



});
