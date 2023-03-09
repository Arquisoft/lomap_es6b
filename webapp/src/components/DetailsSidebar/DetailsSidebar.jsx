import React, {useState} from 'react';
import useStyles from "./styles";

const DetailsSidebar = (props) => {
    const classes = useStyles();
    const [content, setContent] = useState("");


    const handleButtonAction = (buttonName) => {
        switch (buttonName) {
            case 'MyPlaces' :
                console.log('Funcion en details ' + buttonName);
                setContent( 'Este es el contenido de MyPlaces');
                break;
            case 'AddPlace' :
                console.log('Funcion en details ' + buttonName);

                break;
            case 'Friends':
                console.log('Funcion en details ' + buttonName);

                break;
            case 'Settings':
                console.log('Funcion en details ' + buttonName);

                break;
            case 'Profile':
                console.log('Funcion en details ' + buttonName);

                break;
            default:
                setContent("");
                break;
        }
    }

    return (
        <div className={classes.detailsSideBar}>
            <div className ={classes.content}>
                {props.selectedButton}
            </div>
        </div>
    );
}

export default DetailsSidebar ;



