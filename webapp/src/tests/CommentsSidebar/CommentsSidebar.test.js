import MyPlacesSidebar from "../../components/MyPlacesSidebar/MyPlacesSidebar";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../../App";
import CommentsSidebar from "../../components/CommentsSidebar/CommentsSidebar";

test('testing CommentsSidebar', () => {

     render(<CommentsSidebar />);

     //busca el boton para añadir comentario
    const addBotton = screen.getByRole("button", {name:'Add a text comment'});
    expect(addBotton).toBeInTheDocument();
   
    //etiqueta showing
     const showing = screen.getByTestId("commentSidebarLabelShowing")
     expect(showing).toBeInTheDocument();

     //tipo de comentarios
     const select = screen.getByTestId('Type of comments to show');
     expect(select).toBeInTheDocument();

    


     
});

