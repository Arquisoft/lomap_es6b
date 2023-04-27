import {render, screen} from "@testing-library/react";
import SettingsSideBar from "../components/SettingsSideBar/SettingsSideBar";

test('testing SettingsSidebar', () => {
        render(<SettingsSideBar/>);

        // const snackbar = screen.getByTestId('snack');
        // expect(snackbar).toBeInTheDocument();
    }
);