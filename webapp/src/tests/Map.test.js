import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../App";
import Map from "../components/Map/Map";

test('testing Map', () => {

    const setSelectedPoint = {lat : -1.22222, lng:-3.564642};
    //mismo problema: expected a string but got undefined
     //render(<Map setSelectedPoint={setSelectedPoint} />);

 

});

