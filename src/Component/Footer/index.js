import React from 'react';
import './index.css'; 

const Footer = () => {
    return (
        <footer>
            <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1719082815/Frame_64_mre6ru.png" className="yellowDecorativeLine" alt="Decorative Line"/>
            <div className="footer-container">
                <p className="followUs">Follow us on</p>
                <div className="footerImagesContainer">
                    <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076613/Frame_65_pexeae.png' className="footerFlower" alt="Footer Flower"/>
                    <div className="social-icons">
                        <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076613/001-instagram_fsd4il.png" alt="Instagram" className="icon"/>
                        <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076613/002-youtube_mkm6ay.png" alt="YouTube" className="icon"/>
                        <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076613/003-twitter_bb1ta0.png" alt="Twitter" className="icon"/>
                        <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076613/004-facebook_zrqnpb.png" alt="Facebook" className="icon"/>
                        <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1719083917/005-linkedin_1_eriopu.png" alt="LinkedIn" className="icon"/>
                    </div>
                    <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1719076613/Frame_65_pexeae.png' className="footerFlower" alt="Footer Flower"/>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1719082815/Frame_64_mre6ru.png" className="yellowDecorativeLine" alt="Decorative Line"/>
        </footer>
    );
};

export default Footer;
