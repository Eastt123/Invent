import React from 'react';
import "./Member.css";
import twitter from "../../assets/Facebook.svg"
import facebook from "../../assets/Twitter.svg"
import pinterest from "../../assets/Pinterest.svg"
const Member = ({image, name, position}) => {
    return (
        <div className='member'>
            <img src={image} alt="worker-img" />
            <p>{position}</p>
            <h2>{name}</h2>
            <div className='member-social'>
                <div className="member-line"></div>
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={pinterest} alt="pinterest" />
            </div>
        </div>
    );
};

export default Member;