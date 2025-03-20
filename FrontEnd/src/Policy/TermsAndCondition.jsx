import React from 'react';
import styles from './css/TermsAndCondition.module.css';
import { Mail, MapPin, Phone, Building2 } from 'lucide-react';

const TermsAndCondition = () => {
  return (
    <div className={styles.app}>
      <button className={styles.backButton} onClick={() => window.history.back()} style={{background: 'White', color: 'black'}}>
        <span className={styles.backIcon}>&lt;&lt;</span>
      </button>
      {/* Watermark Pattern */}
      <div className={styles.watermark}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className={styles.watermarkColumn}>
            {Array.from({ length: 8 }).map((_, j) => (
              <svg
                key={j}
                viewBox="0 0 100 100"
                className={styles.watermarkSvg}
              >
                <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
                <path d="M25 12.5 L75 37.5 L75 87.5 L25 62.5 Z" fill="currentColor" fillOpacity="0.4" />
              </svg>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.iconContainer}>
                <Building2 className={styles.headerIcon} />
              </div>
              <h1 className={styles.title}>Terms and Conditions</h1>
            </div>

            <div className={styles.termsBox}>
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Introduction</h2>
                <p className={styles.paragraph}>
                  Welcome to Mekyek Global Services Pvt Ltd ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our website, services, and any associated content (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
              </div>

              <hr className={styles.separator} />

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
                <div className={styles.subSection}>
                  <h3 className={styles.subSectionTitle}>Age Requirement</h3>
                  <p className={styles.paragraph}>
                    You must be at least 18 years old (or the age of majority in your jurisdiction) to use our Services.
                  </p>
                </div>
                <div className={styles.subSection}>
                  <h3 className={styles.subSectionTitle}>Agreement</h3>
                  <p className={styles.paragraph}>
                    If you do not agree to these Terms, you must not use our Services.
                  </p>
                </div>
                <div className={styles.subSection}>
                  <h3 className={styles.subSectionTitle}>Modifications</h3>
                  <p className={styles.paragraph}>
                    We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting. Your continued use of the Services after changes are posted constitutes your acceptance of the revised Terms.
                  </p>
                </div>
              </div>

              <hr className={styles.separator} />

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Use of the Website</h2>
                <div className={styles.subSection}>
                  <h3 className={styles.subSectionTitle}>Lawful Use</h3>
                  <p className={styles.paragraph}>
                    You agree to use our Services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the Services.
                  </p>
                </div>
                <div className={styles.subSection}>
                  <h3 className={styles.subSectionTitle}>Prohibited Content</h3>
                  <p className={styles.paragraph}>
                    You are prohibited from using the Services to transmit any harmful, threatening, fraudulent, or otherwise objectionable content.
                  </p>
                </div>
              </div>

              <hr className={styles.separator} />

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Intellectual Property Rights</h2>
                <div className={styles.subSection}>
                  <h3 className={styles.subSectionTitle}>Ownership</h3>
                  <p className={styles.paragraph}>
                    All content, design elements, text, graphics, images, logos, and trademarks displayed on the Services are our property or used under license.
                  </p>
                </div>
                <div className={styles.subSection}>
                  <h3 className={styles.subSectionTitle}>License</h3>
                  <p className={styles.paragraph}>
                    You are granted a limited, non-exclusive, non-transferable license to access and use the Services for personal, non-commercial purposes.
                  </p>
                </div>
                <div className={styles.subSection}>
                  <h3 className={styles.subSectionTitle}>Restrictions</h3>
                  <p className={styles.paragraph}>
                    You may not copy, reproduce, distribute, or create derivative works without our prior written consent.
                  </p>
                </div>
              </div>

              <hr className={styles.separator} />

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Privacy</h2>
                <p className={styles.paragraph}>
                  Your use of the Services is also governed by our Privacy Policy. By using our Services, you consent to the collection and use of your information as described in the Privacy Policy.
                </p>
              </div>

              <hr className={styles.separator} />

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
                <div className={styles.subSection}>
                  <h3 className={styles.subSectionTitle}>Disclaimer</h3>
                  <p className={styles.paragraph}>
                    To the fullest extent permitted by law, Mekyek Global Services Pvt Ltd shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, the Services.
                  </p>
                </div>
                <div className={styles.subSection}>
                  <h3 className={styles.subSectionTitle}>No Warranties</h3>
                  <p className={styles.paragraph}>
                    We make no warranties or representations about the accuracy, completeness, or reliability of the content on our Services.
                  </p>
                </div>
              </div>

              <hr className={styles.separator} />

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Indemnification</h2>
                <p className={styles.paragraph}>
                  You agree to indemnify, defend, and hold harmless Mekyek Global Services Pvt Ltd, its affiliates, and their respective officers, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees resulting from your violation of these Terms.
                </p>
              </div>

              <hr className={styles.separator} />

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Governing Law</h2>
                <p className={styles.paragraph}>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising out of these Terms shall be resolved exclusively in the courts located in Kolkata, West Bengal.
                </p>
              </div>

              <hr className={styles.separator} />

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Contact Us</h2>
                <div className={styles.contact}>
                  <p className={styles.contactTitle}>Mekyek Global Services Pvt Ltd</p>
                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                      <Mail className={styles.contactIcon} />
                    </div>
                    <a href="mailto:help@mekyek.com" className={styles.contactLink}>
                      help@mekyek.com
                    </a>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                      <Phone className={styles.contactIcon} />
                    </div>
                    <a href="tel:+918335974309" className={styles.contactLink}>
                      +91 8335974309
                    </a>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                      <MapPin className={styles.contactIcon} />
                    </div>
                    <p className={styles.contactText}>
                      Mekyek, AWFIS, 6TH Floor, ECOSPACE BUSINESS PARK AA II, Newtown, Kolkata, Chakpachuria, West Bengal 700156
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndCondition;
