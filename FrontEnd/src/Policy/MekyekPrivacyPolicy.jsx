import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import styles from './css/PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.app}>
      <button className={styles.backButton} onClick={() => window.history.back()} style={{background: 'White', color: 'black'}}>
              <span className={styles.backIcon}>&lt;&lt;</span>
            </button>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <Shield className={styles.icon} />
          <h1 className={styles.title}>Privacy Policy</h1>
        </div>

        {/* Main Content */}
        <div className={styles.main}>
          {/* Introduction */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p className={styles.paragraph}>
              We at Mekyek Global Services Pvt Ltd value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
            </p>
          </section>

          {/* Information Collection */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Information We Collect</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  <strong className={styles.strong}>Personal Information:</strong> Such as your name, email address, phone number, and any other details you provide when you sign up or contact us.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  <strong className={styles.strong}>Usage Data:</strong> Information about how you access and use the website, including your IP address, browser type, device information, and browsing behavior.
                </span>
              </li>
            </ul>
          </section>

          {/* Data Usage */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  <strong className={styles.strong}>To Provide Services:</strong> We use your personal information to respond to your inquiries, process your requests, and deliver the Services you've requested.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  <strong className={styles.strong}>To Improve Our Services:</strong> We analyze usage data to understand user behavior, troubleshoot technical issues, and develop new features.
                </span>
              </li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <a href="mailto:help@mekyek.com" className={styles.contactLink}>
                  help@mekyek.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span className={styles.contactText}>8335974309</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <address className={styles.contactAddress}>
                  Mekyek, AWFIS, 6TH Floor, ECOSPACE BUSINESS PARK, AA II, Newtown, Kolkata, Chakpachuria, West Bengal 700156
                </address>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          © {new Date().getFullYear()} Mekyek Global Services Pvt Ltd. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
