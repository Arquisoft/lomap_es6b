import MyPlacesSidebar from "../../components/MyPlacesSidebar/MyPlacesSidebar";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../../App";
import TextCommentCard from "../../components/CommentCards/TextCommentCard/TextCommentCard";

test('testing textCommentCard', () => {

     render(<TextCommentCard />);

     /*
     const avatarElement = screen.getByTestId('avatarCard'); 
     const imageElement = screen.getByRole('img');
     const typographyElement = screen.getByText(/@/i);
 
     expect(avatarElement).toBeInTheDocument();
     expect(imageElement).toBeInTheDocument();
     expect(typographyElement).toBeInTheDocument(); 
     */

});

