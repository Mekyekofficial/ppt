import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p>
            Connecting professionals, empowering careers, and fostering growth
            in the digital age.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/feeds">News Feed</Link>
            </li>
            <li>
              <Link to="/learn">Courses</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/Work">Jobs</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/learn">Learning Center</Link>
            </li>
            <li>
              <Link to="/ATS">ATS</Link>
            </li>
            <li>
              <Link to="/help">Help Center</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Business Ave</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 Your Platform Name. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
