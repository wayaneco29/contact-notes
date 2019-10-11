import React from 'react';

import './footer.styles.scss';

const Footer = () => {

    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-inner">
                    Made by: <a href="https://www.facebook.com/wayandanyael" target="_blank" style={{color: "white", fontWeight: "500"}}> Wayan Danyael Eco</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;