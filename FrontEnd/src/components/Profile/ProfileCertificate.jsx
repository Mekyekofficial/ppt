import React, { useState } from "react";
import styles from "./css/ProfileEducation.module.css";
import ProfileCertificateEdit from "./Edit/ProfileCertificateEdit";

const ProfileCertificate = ({user, profileOwner}) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className={styles.educationCard}>
      <div className={styles.header}>
        <div className={styles.title}>Certification</div>
        {profileOwner && 
        <svg className={styles.editIcon} onClick={() => setEdit(true)} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.6667 158.333H53.5417L135 76.875L123.125 65L41.6667 146.458V158.333ZM25 175V139.583L146.875 18.125L181.667 53.75L60.4167 175H25ZM128.958 71.0417L123.125 65L135 76.875L128.958 71.0417Z" fill="black"/>
        </svg>}
      </div>

      <div className={styles.content}>
        <div className={styles.timeline}>
          <div className={styles.item}>
            <svg className={styles.icon} viewBox="0 0 406 408" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M346.647 159.77C346.647 239.54 282.296 304.208 202.916 304.208C123.537 304.208 59.1875 239.54 59.1875 159.77C59.1875 79.9995 123.537 15.3328 202.916 15.3328C282.296 15.3328 346.647 79.9995 346.647 159.77Z" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M208.804 81.3482L228.603 121.372C229.046 122.384 229.748 123.26 230.637 123.91C231.527 124.56 232.573 124.962 233.668 125.073L277.639 131.782C278.895 131.947 280.08 132.467 281.054 133.283C282.027 134.099 282.749 135.177 283.135 136.39C283.522 137.604 283.557 138.903 283.235 140.135C282.914 141.367 282.25 142.482 281.322 143.35L248.862 174.35C248.378 175.278 248.125 176.31 248.125 177.358C248.125 178.406 248.378 179.437 248.862 180.365L255.077 224.322C255.343 225.592 255.235 226.913 254.769 228.123C254.302 229.334 253.495 230.382 252.448 231.141C251.4 231.9 250.155 232.338 248.865 232.4C247.575 232.463 246.294 232.148 245.178 231.493L206.042 210.672C205.029 210.212 203.93 209.974 202.819 209.974C201.707 209.974 200.609 210.212 199.596 210.672L160.459 231.493C159.344 232.148 158.063 232.463 156.773 232.4C155.482 232.338 154.238 231.9 153.19 231.141C152.142 230.382 151.336 229.334 150.869 228.123C150.402 226.913 150.295 225.592 150.56 224.322L157.927 180.365C158.244 179.345 158.304 178.262 158.104 177.212C157.903 176.163 157.447 175.18 156.776 174.35L124.316 143.118C123.455 142.242 122.85 141.144 122.569 139.945C122.288 138.746 122.34 137.493 122.721 136.322C123.101 135.152 123.795 134.109 124.726 133.308C125.657 132.507 126.789 131.979 127.999 131.782L171.97 125.304C173.065 125.193 174.11 124.792 175 124.142C175.89 123.491 176.592 122.615 177.035 121.603L196.833 81.5796C197.363 80.4465 198.198 79.4851 199.243 78.804C200.288 78.1229 201.502 77.749 202.747 77.7249C203.993 77.701 205.22 78.0274 206.29 78.6679C207.361 79.3082 208.232 80.2367 208.804 81.3482Z" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M78.4166 230.617L14.5 341.869L83.5636 323.273L102.069 392.677L157.526 296.15" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M327.578 230.617L391.494 341.869L322.431 323.273L303.926 392.677L248.469 296.15" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


            <div>
              <div className={styles.degree}>
                {user?.certificate[0]?.name || "Add your Certification"}
              </div>
              <div className={styles.field}>
                {user?.certificate[0]?.field || "Field"}
              </div>
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.item}>
            <svg className={styles.icon} viewBox="0 0 406 408" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M346.647 159.77C346.647 239.54 282.296 304.208 202.916 304.208C123.537 304.208 59.1875 239.54 59.1875 159.77C59.1875 79.9995 123.537 15.3328 202.916 15.3328C282.296 15.3328 346.647 79.9995 346.647 159.77Z" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M208.804 81.3482L228.603 121.372C229.046 122.384 229.748 123.26 230.637 123.91C231.527 124.56 232.573 124.962 233.668 125.073L277.639 131.782C278.895 131.947 280.08 132.467 281.054 133.283C282.027 134.099 282.749 135.177 283.135 136.39C283.522 137.604 283.557 138.903 283.235 140.135C282.914 141.367 282.25 142.482 281.322 143.35L248.862 174.35C248.378 175.278 248.125 176.31 248.125 177.358C248.125 178.406 248.378 179.437 248.862 180.365L255.077 224.322C255.343 225.592 255.235 226.913 254.769 228.123C254.302 229.334 253.495 230.382 252.448 231.141C251.4 231.9 250.155 232.338 248.865 232.4C247.575 232.463 246.294 232.148 245.178 231.493L206.042 210.672C205.029 210.212 203.93 209.974 202.819 209.974C201.707 209.974 200.609 210.212 199.596 210.672L160.459 231.493C159.344 232.148 158.063 232.463 156.773 232.4C155.482 232.338 154.238 231.9 153.19 231.141C152.142 230.382 151.336 229.334 150.869 228.123C150.402 226.913 150.295 225.592 150.56 224.322L157.927 180.365C158.244 179.345 158.304 178.262 158.104 177.212C157.903 176.163 157.447 175.18 156.776 174.35L124.316 143.118C123.455 142.242 122.85 141.144 122.569 139.945C122.288 138.746 122.34 137.493 122.721 136.322C123.101 135.152 123.795 134.109 124.726 133.308C125.657 132.507 126.789 131.979 127.999 131.782L171.97 125.304C173.065 125.193 174.11 124.792 175 124.142C175.89 123.491 176.592 122.615 177.035 121.603L196.833 81.5796C197.363 80.4465 198.198 79.4851 199.243 78.804C200.288 78.1229 201.502 77.749 202.747 77.7249C203.993 77.701 205.22 78.0274 206.29 78.6679C207.361 79.3082 208.232 80.2367 208.804 81.3482Z" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M78.4166 230.617L14.5 341.869L83.5636 323.273L102.069 392.677L157.526 296.15" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M327.578 230.617L391.494 341.869L322.431 323.273L303.926 392.677L248.469 296.15" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div>
            <div className={styles.degree}>
                {user?.certificate[1]?.name || "Add your Certification"}
              </div>
              <div className={styles.field}>
                {user?.certificate[1]?.field || "Field"}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.passingYear}>
          <div className={styles.year}>
            {user?.certificate[0]?.duration || "Add Duration"}
          </div>
          <div className={styles.year}>
            {user?.certificate[1]?.duration || "Add Duration"}
          </div>
        </div>
      </div>

      <div className={styles.showMore}>
                    Show More 
                    <svg viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.2109 94.5835L113.503 141.875L160.794 94.5835" stroke="black" stroke-width="22.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
      <ProfileCertificateEdit isOpen={edit} onClose={() => setEdit(false)} userId={user?._id}/>
    </div>
  );
};

export default ProfileCertificate;
