import React, {useEffect, useState} from 'react';
import {getFriends, giveFriendsPermissions} from "../../solidapi/solidAdapter";
import FriendCard from "../FriendCard/FriendCard";

const SocialSidebar = (props) => {
    const {userWebId, setSelectedFriend,setSelectedButton, deleteFriend} = props;
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        if(userWebId){
            getFriends(userWebId).then((friends) => {
                setFriends(friends);
            });
        }
    }, []);

    const showFriends = () => {
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