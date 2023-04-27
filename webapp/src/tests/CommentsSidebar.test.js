import MyPlacesSidebar from "../components/MyPlacesSidebar/MyPlacesSidebar";
import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";
import CommentsSidebar from "../components/CommentsSidebar/CommentsSidebar";
test('testing CommentsSidebar', () => {
     render(<CommentsSidebar/>);
    const addBotton = screen.getByRole("button", {name:'Add a text comment'});
    expect(addBotton).toBeInTheDocument();

    fireEvent.mouseDown(addBotton);

     expect(addBotton).toBeInTheDocument();
    
});