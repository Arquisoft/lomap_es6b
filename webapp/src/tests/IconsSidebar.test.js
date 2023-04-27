import {fireEvent, render, screen} from "@testing-library/react";
import IconsSidebar from "../components/IconsSidebar/IconsSidebar";

test('testing IconsSidebar', () => {
        render(<IconsSidebar/>);

        const placeIcon = screen.getByTestId('place-icon');
        expect(placeIcon).toBeInTheDocument();

        const addPlaceIcon = screen.getByTestId('addplace-icon');
        expect(addPlaceIcon).toBeInTheDocument();

        const groupsIcon = screen.getByTestId('groups-icon');
        expect(groupsIcon).toBeInTheDocument();

        const settingsIcon = screen.getByTestId('settings-icon');
        expect(settingsIcon).toBeInTheDocument();

        const profileIcon = screen.getByTestId('profile-icon');
        expect(profileIcon).toBeInTheDocument();


    }
);