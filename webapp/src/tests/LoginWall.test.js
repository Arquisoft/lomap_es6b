import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import App from "../App";
import LoginWall from "../components/LoginWall/LoginWall";

test('testing LoginWall', async () => {
        render(<LoginWall/>);
        const btLogin = screen.getByTestId('login-button');

        // const btAddPlace = screen.getByTitle('Add Place Button');
        expect(btLogin).toBeInTheDocument();

        fireEvent.mouseDown(btLogin);
        fireEvent.mouseUp(btLogin);
    }
);