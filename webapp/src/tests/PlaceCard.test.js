import {render, screen} from "@testing-library/react";
import PlaceCard from "../components/PlaceCard/PlaceCard";

test('testing PlaceCard', () => {
    const place = {
        id: "udd76adsy7da7gs",
        category: 'Bar',
        name: 'Prueba',
        description: 'Esto es una prueba',
        latitude: 0.0,
        longitude: 0.0,
        webId: "https://uo282249.inrupt.net/profile/card#me",
        textComments: [],
        privacy: 'public',
        imageComments: [],
        ratingComments: []
    };
        render(<PlaceCard place={place}/>);

        // const searchbar = screen.getByTestId('search-bar');
        // expect(searchbar).toBeInTheDocument();
    }
);