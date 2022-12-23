import React from 'react';
import "./Header.css";
import worker from "../../assets/Worker.png"
const Header = () => {
    return (
        <section className='header'>
            <div className="header__title">
                <h1>Innovation</h1>
                <div className='header__title-work'>
                    <div className='garident__color'></div>
                    <h2>Constructure</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
                </p>
                <button>read more</button>
            </div>
            <div className="header__image">
                <div>
                <img src={worker} alt="worker-img" />
                </div>
                <div className="circle"></div>
            </div>
        </section>
    );
};

export default Header;