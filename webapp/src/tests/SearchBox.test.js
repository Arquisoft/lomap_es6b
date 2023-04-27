import {render, screen} from "@testing-library/react";
import SearchBox from "../components/SearchBox/SearchBox";

test('testing SearchBox', () => {
        render(<SearchBox/>);

        const searchbar = screen.getByTestId('search-bar');
        expect(searchbar).toBeInTheDocument();
    }
);