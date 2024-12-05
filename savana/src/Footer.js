import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="column" id="col1">
                    <div className="logo">
                        <img src="Logo.png" alt="Logo" />
                    </div>
                    <p>Stay committed to your health journey. Let Savana guide you every step of the way.</p>
                </div>
                <div className="column" id="col2">
                    <h3>Get In Touch</h3>
                    <p><span className="icon">📍</span>140 Home Street, Plano</p>
                    <p><span className="icon">✉️</span>savana@mail.com</p>
                    <p><span className="icon">📞</span>+1 (234) 567 890</p>
                </div>
                <div className="column" id="col3">
                    <h3>Quicklinks</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div className="column" id="col4">
                    <h3>Newsletter</h3>
                    <div className="newsletter">
                        <input type="email" placeholder="Email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2021 ASK Project</p>
                <div className="social-icons">
                    <a href="#" className="icon facebook"> <img src="facebook.png" alt="f" /></a>
                    <a href="#" className="icon twitter"> <img src="twitter.png" alt="t" /></a>
                    <a href="#" className="icon linkedin"> <img src="linkedin.png" alt="l" /></a>
                </div>
            </div>
        </div>

    )
}