import MyPlacesSidebar from "../../components/MyPlacesSidebar/MyPlacesSidebar";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../../App";
import RatingCommentCard from "../../components/CommentCards/RatingCommentCard/RatingCommentCard";

test('testing RatingCommentCard', () => {

     render(<RatingCommentCard />);

     /*
     const avatarElement = screen.getByTestId('avatarCard'); 
     const imageElement = screen.getByRole('img');
     const typographyElement = screen.getByText(/@/i);
 
     expect(avatarElement).toBeInTheDocument();
     expect(imageElement).toBeInTheDocument();
     expect(typographyElement).toBeInTheDocument(); 
     */

});

