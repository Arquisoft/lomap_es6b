import React, {useState} from 'react';
import useStyles from "./styles";
import AddPlaceSidebar from "../AddPlaceSidebar/AddPlaceSidebar";
const DetailsSidebar = (props) => {
    const classes = useStyles();
    const [content, setContent] = useState("");
    const {places, setPlaces} = props;

    const handleSelectedButton = (buttonName) => {
        switch (buttonName) {
            case 'MyPlaces' :
                return <h1> My places.</h1>;
            case 'AddPlace' :
                return <AddPlaceSidebar places={places} setPlaces={setPlaces} />;
            case 'Friends':
                return <h1> Friends.</h1>;
            case 'Settings':
                return <h1> Settings.</h1>;
            case 'Profile':
                return <h1> Profile.</h1>;
            default:
                setContent("");
                break;
        }
    }

    return (
        <div className={classes.detailsSideBar}>
            <div>
                {handleSelectedButton(props.selectedButton)}
            </div>
        </div>
    );
}

export default DetailsSidebar ;



