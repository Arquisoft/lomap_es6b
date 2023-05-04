import React, {useEffect, useState} from 'react';
import {getFriends} from "../../solidapi/solidAdapter";
import FriendCard from "../FriendCard/FriendCard";
import {CircularProgress} from "@mui/material";

const SocialSidebar = (props) => {
    const {userWebId, setSelectedFriend,setSelectedButton, deleteFriend,session} = props;
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(async () => {
        if (userWebId) {
            setIsLoading(true);
            await getFriends(userWebId).then((friends) => {
                setFriends(friends);
                setIsLoading(false);
            });
        }
    }, []);

    const showFriends = () => {
        if (props.showFriendsMock) props.showFriendsMock(); //TESTING
        return friends?.map((friend) => (
            <FriendCard  key={friend.friendURL} friend={friend} setSelectedButton={setSelectedButton} setSelectedFriend={setSelectedFriend}
            deleteFriend = {deleteFriend} userWebId={userWebId} session={session}/>
        ));
    };

    return (
        <div>
            <div style={{textAlign: "center"}}>
                {isLoading ? <CircularProgress color={"inherit"} /> : null}
            </div>
            {showFriends()}
        </div>
    );

}
export default SocialSidebar;