import React from "react";
import "./profile.css";
import image from '../../assets/avatar2square.jpeg';
import PropTypes from 'prop-types';

const Profile = () => {
    const profileItems = ["aaa", "bbb", "ccc", "ddd", "eee"];
    const ProfileItem = ({name}) => {
        return(
            <div className="profile_item">
                <div className="profile_item_header"></div>
                <div className="profile_item_text">{name}</div>
                <div className="profile_item_text">{name}</div>
            </div>
        )
    }
    return(
        <div className="profile">
            <div className="profile_header">
                <div className="profile_pic_icon"></div>
                <div className="profile_pic_border">
                    <div className="profile_pic_holder">
                        <img src={image} alt={"profile"}/>
                    </div> 
                </div>
                <p className="profile_header_a">24</p>
            </div>
            <div className="profile_items">
                {profileItems.map((item) => (
                    <ProfileItem key={"profile_item_"+item} name={item}/>
                ))}
            </div>
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired
};

export default Profile;