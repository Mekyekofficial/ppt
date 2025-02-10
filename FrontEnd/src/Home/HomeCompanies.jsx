import React from "react";
import styles from "./css/HomeCompanies.module.css";
import Rapido from "../assets/rapido.png";
import Swiggy from "../assets/swiggy.png";
import TCS from "../assets/tcs.png";
import Paytm from "../assets/paytm.png";
import Tinder from "../assets/tinder.png";
import Boat from "../assets/boat.png";
import Concentrix from "../assets/concentrix.png";

const HomeBusiness = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={Rapido} alt="Rapido" />
        <img src={Swiggy} alt="Swiggy" />
        <img src={TCS} alt="TCS" />
        <img src={Paytm} alt="Paytm" />
        <img src={Tinder} alt="Tinder" />
        <img src={Boat} alt="Boat" />
        <img src={Concentrix} alt="Concentrix" />
      </div>
    </div>
  );
};

export default HomeBusiness;
