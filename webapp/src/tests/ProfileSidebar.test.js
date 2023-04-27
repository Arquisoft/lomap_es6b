import {findByText, fireEvent, render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react";
import App from "../App";
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";

test('testing LoginWall', async () => {
        render(<ProfileSideBar/>);


        //TODO: hacer funcionar esto:
        /* const btLogout = screen.getByTestId('logout-button');
        expect(btLogout).toBeInTheDocument();


        fireEvent.mouseDown(btLogout);
        fireEvent.mouseUp(btLogout);

        const snackbar = screen.getByTestId('snack');
        expect(btLogout).toBeInTheDocument();*/


    }
);