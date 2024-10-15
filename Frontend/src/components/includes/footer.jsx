import React from 'react';
import { FaGooglePlay, FaApple, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaAlignCenter } from 'react-icons/fa';
import FooterStyles from './css/footer.module.css';

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles["footer-content"]}>
        {/* ColorSection */}
        <div className={FooterStyles["color-section"]}></div>
        {/* Company Section */}
        <div className={FooterStyles["footer-section"]}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Privacy & Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className={FooterStyles["footer-section"]} id={FooterStyles.QuickLinks}>
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
        <div className={FooterStyles["footer-section"]} id={FooterStyles.QuickLinks}>
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
        <div className={FooterStyles["footer-download"]}>
          <button className={FooterStyles["store-button"]}>
            <FaGooglePlay className={FooterStyles["store-icon"]} /> Download on Play Store
          </button>
          <button className={FooterStyles["store-button"]}>
            <FaApple className={FooterStyles["store-icon"]} /> Download on App Store
          </button>
          <p>Are you hiring? <a href="#" className={FooterStyles.highlight}>Find Talent</a></p>
          {/* Social Media Section */}
          <div className={FooterStyles["footer-social"]}>
            <FaTwitter className={FooterStyles["social-icon"]} />
            <FaInstagram className={FooterStyles["social-icon"]} />
            <FaLinkedin className={FooterStyles["social-icon"]} />
            <FaYoutube className={FooterStyles["social-icon"]} />
            <FaFacebook className={FooterStyles["social-icon"]} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
