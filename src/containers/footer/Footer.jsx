import React from 'react';
import logo from "../../assets/logo.png"
import "./Footer.css";
import facebook from "../../assets/Facebookmain.svg"
import instagram from "../../assets/Instagrammain.svg"
import linkedIn from "../../assets/Linkedinmain.svg"
import twitter from "../../assets/Twittermain.svg";
import Union from "../../assets/Union.svg"
const Footer = () => {
    return (
        <div className='footer'>
                <div className='footer-links_logo'>
                    <div className='footer-links_logo-container'>
                        <div>
                        <img src={logo} alt="logo-img" />
                        </div>
                        <div className='footer-links'>
                            <h4>Flutterwave</h4>
                            <p>Phlox Group</p>
                        </div>
                    </div>
                    <p>
                    In a professional context it often happens that private or corporate clients a publication to be made and presented with the actual content
                    </p>
                    <div className='footer-links_social'>
                    <img src={facebook} alt="facebook-logo" />
                    <img src={twitter} alt="twitter-logo" />
                    <img src={linkedIn} alt="linkedin-logo" />
                    <img src={instagram} alt="instagram-logo" />
                    </div>
                </div>

                <div className="footer-links_div">
                    <div>
                        <div className="footer-line"></div>
                        <h2>Useful Links</h2>
                    </div>
                    <ul>
                        <li><p>General Information For Users</p></li>
                        <li><p>Interactive Fairy Tales</p></li>
                        <li><p>Official Storybook Maker Website</p>   </li>
                        <li> <p>Everyday Mathematics Links</p> </li>
                    </ul>
                </div>
                <div className="footer-links_div">
                    <div>
                        <div className="footer-line"></div>
                        <h2>Contact Us</h2>
                    </div>
                    <ul>
                        <li><p>Address: 123 Ave, Lorem City, site Country, The World</p></li>
                        <li> <p>Phone: +7 (212) 654-33-35</p></li>
                        <li><p>Email: Info@yourdomain.com</p></li>
                    </ul>
                </div>
                <div className="footer-links_div">
                    <div>
                        <div className="footer-line"></div>
                        <h2>Newsletter</h2>
                    </div>
                     <p>Subscribe to our MailChimp newsletter and stay up to date with all events coming straight in your mailbox:</p>
                    <div className='footer-email'>
                        <input type="email" placeholder='Your email address' name="" id="" />
                        <button>
                            <img src={Union} alt="Union-logo" />
                        </button>
                    </div>
                </div>
               
        </div>
    );
};

export default Footer;