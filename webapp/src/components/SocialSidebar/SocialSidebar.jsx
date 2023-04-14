import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import PlaceCard from "../PlaceCard/PlaceCard";
import {getFriends} from "../../solidapi/solidAdapter";
import FriendCard from "../FriendCard/FriendCard";

const SocialSidebar = (props) => {
    // const classes = useStyles();
    const {userWebId, setSelectedFriend,setSelectedButton, deleteFriend} = props;
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        getFriends(userWebId).then((friends) => {
            setFriends(friends);
        });
    }, []);

    const showFriends = () => {
        console.log(friends);
        return friends?.map((friend) => (
            <FriendCard key={friend.friendURL} friend={friend} setSelectedButton={setSelectedButton} setSelectedFriend={setSelectedFriend}
            deleteFriend = {deleteFriend} userWebId={userWebId}/>
        ));
    };

    return (
        <div>
            {showFriends()}
        </div>
    );

}
export default SocialSidebar;