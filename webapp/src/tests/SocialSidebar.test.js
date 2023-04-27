import {render} from "@testing-library/react";
import SocialSidebar from "../components/SocialSidebar/SocialSidebar";

test('testing SocialSidebar', () => {
    const webId = "https://uo282249.inrupt.net/profile/card#me";
        render(<SocialSidebar userWebId={webId}/>);

    }
);