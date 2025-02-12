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

const HomeBusiness = () => {
  // Create an array of image objects
  const images = [
    { src: Rapido, alt: "Rapido" },
    { src: Swiggy, alt: "Swiggy" },
    { src: TCS, alt: "TCS" },
    { src: Paytm, alt: "Paytm" },
    { src: Tinder, alt: "Tinder" },
    { src: Boat, alt: "Boat" },
    { src: Concentrix, alt: "Concentrix" },
    { src: Ola, alt: "Ola" },
    { src: Zomato, alt: "Zomato" },
    { src: UrbanCompany, alt: "UrbanCompany" },
    { src: PhonePe, alt: "PhonePe" },
    { src: Flipkart, alt: "Flipkart" },
    { src: Amazon, alt: "Amazon" },
    { src: Google, alt: "Google" },
  ];
  
  // Duplicate the images array for a seamless scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        {/* This wrapper will clip the scrolling images */}
        <div className={styles.imagesWrapper}>
          <div className={styles.images}>
            {duplicatedImages.map((img, index) => (
              <img key={index} src={img.src} alt={img.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBusiness;
