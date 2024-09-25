import React from 'react';
import './css/footer.css';
import { FaGooglePlay, FaApple, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaAlignCenter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* ColorSection */}
        <div className="color-section"></div>
        {/* Company Section */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Privacy & Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section" id='QuickLinks'>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Hire Talent</a></li>
            <li><a href="#">Find Work</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">ATS</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* App Download Section */}
        <div className="footer-download">
          <button className="store-button">
            <FaGooglePlay className="store-icon" /> Download on Play Store
          </button>
          <button className="store-button">
            <FaApple className="store-icon" /> Download on App Store
          </button>
          <p>Are you hiring? <a href="#" className="highlight">Find Talent</a></p>
          {/* Social Media Section */}
          <div className="footer-social">
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaFacebook className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
