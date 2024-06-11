import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo">ChopNFresh</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>FAQs</li>
                    <li>Partner with Us</li>
                </ul>
            </nav>
            <div>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </header>
    );
}

export default Header;
