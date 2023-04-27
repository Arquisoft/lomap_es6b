import MyPlacesSidebar from "../../components/MyPlacesSidebar/MyPlacesSidebar";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../../App";
import AddCommentButton from "../../components/CommentsSidebar/AddCommentButton/AddCommentButton";

test('testing AddCommentButton', () => {

     render(<AddCommentButton />);

    //ebusca el boton
     const boton = screen.getByTestId("AddCommentBotton")
     expect(boton).toBeInTheDocument();

    // Comprueba que el texto del botón sea el esperado
    expect(boton.textContent).toBe('Add a text comment ');


    // Comprueba que el menú desplegable se ha renderizado
    const menu = screen.getByTestId("botonMenuComment");
    expect(menu).toBeInTheDocument(); 
});

