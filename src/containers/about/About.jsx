import React from 'react';
import "./About.css";
import image from "../../assets/WebTopImage.png";
import image1 from "../../assets/WebLeftImage.png";
const About = () => {
    return (
        <section className='about'>
            <div className='about-img'>
            <img src={image1} alt="" />
            <img src={image} alt="" />
            </div>
            <div className='about__text'>
                <div className="about__text-title">
                    <div className='line'></div>
                    <h4>About Phlox Group</h4>
                </div>
                <h1>We Are The Leader 
In Construction</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus</p>
                <div className="about__text-descr">
                <div className='garident__color'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis </p>
                </div>
                <button className='btn'>learn more</button>
            </div>
        </section>
    );
};

export default About;