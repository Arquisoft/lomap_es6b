import React, {useEffect, useState} from 'react';
import {getFriends, giveFriendsPermissions} from "../../solidapi/solidAdapter";
import FriendCard from "../FriendCard/FriendCard";

const SocialSidebar = (props) => {
    const {userWebId, setSelectedFriend,setSelectedButton, deleteFriend,session} = props;
    const [friends, setFriends] = useState([]);
    useEffect(async () => {
        if (userWebId) {
            await getFriends(userWebId).then((friends) => {
                setFriends(friends);
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
            {showFriends()}
        </div>
    );

}
export default SocialSidebar;