import React from "react";
import styles from "./css/HomeCompanies.module.css";
import Rapido from "../assets/rapido.png";
import Swiggy from "../assets/swiggy.png";
import TCS from "../assets/tcs.png";
import Paytm from "../assets/paytm.png";
import Tinder from "../assets/tinder.png";
import Boat from "../assets/boat.png";
import Concentrix from "../assets/concentrix.png";
import Ola from "../assets/ola.png";
import Zomato from "../assets/zomato.png";
import UrbanCompany from "../assets/urbanCompany.png";
import PhonePe from "../assets/phonePe.png";
import Flipkart from "../assets/flipkart.png";
import Amazon from "../assets/amazon.png";
import Google from "../assets/google.png";

const HomeCompanies = () => {
  const companies = [
    Rapido,
    Swiggy,
    TCS,
    Paytm,
    Tinder,
    Boat,
    Concentrix,
    Ola,
    Zomato,
    UrbanCompany,
    PhonePe,
    Flipkart,
    Amazon,
    Google,
    // Duplicate for seamless loop
    Rapido,
    Swiggy,
    TCS,
    Paytm,
    Tinder,
    Boat,
    Concentrix,
    Ola,
    Zomato,
    UrbanCompany,
    PhonePe,
    Flipkart,
    Amazon,
    Google,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h2>Trusted by Leading Companies</h2>
          <p>
            Join thousands of companies that trust our platform for their hiring
            needs
          </p>
        </div>
        <div className={styles.imagesWrapper}>
          <div className={styles.track}>
            {companies.slice(0, companies.length / 2).map((company, index) => (
              <div key={index} className={styles.companyLogo}>
                <img src={company} alt={`Company ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className={styles.track}>
            {companies.slice(companies.length / 2).map((company, index) => (
              <div key={`duplicate-${index}`} className={styles.companyLogo}>
                <img src={company} alt={`Company ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCompanies;
