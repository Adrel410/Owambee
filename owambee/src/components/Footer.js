import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-links">
                <div>
                    <h4>More</h4>
                    <p>Newsroom</p>
                    <p>Careers</p>
                    <p>Restaurants Signup</p>
                    <p>Grocery Signup</p>
                    <p>Become a rider</p>
                </div>
                <div>
                    <h4>Legal</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                </div>
                <div>
                    <h4>Help</h4>
                    <p>Contact</p>
                    <p>FAQs</p>
                    <p>Cuisines</p>
                    <p>Brands</p>
                </div>
            </div>
            <div className="app-links">
                <h4>Download our App</h4>
                <a href="#"><img src="./assets/images/app-store.png" alt="App Store" /></a>
                <a href="#"><img src="./assets/images/google-play.png" alt="Google Play" /></a>
            </div>
            <p>&copy; 2024 all rights reserved</p>
        </footer>
    );
}

export default Footer;
