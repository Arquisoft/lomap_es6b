import MyPlacesSidebar from "../../components/MyPlacesSidebar/MyPlacesSidebar";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../../App";
import ImageCommentCard from "../../components/CommentCards/ImageCommentCard/ImageCommentCard";

test('testing ImageCommentCard', () => {

     render(<ImageCommentCard />);

    //ebusca el boton
     //const dataProvider = screen.getByTestId("dataProvider")
     //expect(dataProvider).toBeInTheDocument();

});

