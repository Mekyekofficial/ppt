import React, { useEffect, useState, useRef } from "react";
import styles from "./css/HomeCards.module.css";
import Card1Image from "../assets/card1.png";
import Card2Image from "../assets/card2.png";
import Card3Image from "../assets/card3.png";
import Card4Image from "../assets/card4.png";

const cardData = [
  {
    title: "Learn, Grow, and Get Hired – Your Career Starts Here!",
    text: "Learning courses help individuals acquire multiple skills, enhancing their expertise and making them more competitive in the job market. By gaining diverse skills through structured learning, job seekers can increase their chances of securing better opportunities.",
    image: Card1Image,
    bgColor: "#F8F8DC", // Light Yellow
    textColor: "black",
    flexDirection: "row",
    transform: "rotateZ(-10deg)",
  },
  {
    title: "Connect, Learn, and Unlock Opportunities!",
    text: "Hosting and attending live events create valuable opportunities for networking, learning, and professional growth. These events bring together industry experts, professionals, and job seekers, fostering real-time interactions and meaningful connections.",
    image: Card2Image,
    bgColor: "#333333", // Dark Theme
    textColor: "#D6C668",
    flexDirection: "row-reverse",
    transform: "rotateZ(10deg)",
  },
  {
    title: "Stay Informed, Stay Ahead with Our Daily Audio News Digest!",
    text: "In today's fast-paced world, staying updated on the latest news is essential. Our audio-embedded news provides a quick and efficient way to get informed on various topics including technology, politics, health, and entertainment.",
    image: Card3Image,
    bgColor: "#F8F8DC", // Light Yellow
    textColor: "black",
    flexDirection: "row",
    transform: "rotateZ(-10deg)",
  },
  {
    title: "ATS: Connecting Talent, Simplifying Hiring!",
    text: "An Applicant Tracking System (ATS) streamlines hiring by automating job postings, filtering applications, and helping recruiters find top talent efficiently. Employers can post jobs across multiple platforms, set candidate criteria, and manage applications in one place.",
    image: Card4Image,
    bgColor: "#333333", // Dark Theme
    textColor: "#D6C668",
    flexDirection: "row-reverse",
    transform: "rotateZ(10deg)",
  },
];

const HomeCards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const containerRef = useRef(null);
  // Lock to prevent rapid scroll events
  const scrollingRef = useRef(false);

  useEffect(() => {
    const handleWheel = (event) => {
      // Only process scroll events if the cursor is over the container.
      if (!containerRef.current || !containerRef.current.matches(":hover")) {
        return;
      }
      // Prevent default scrolling behavior.
      event.preventDefault();

      if (scrollingRef.current) return;
      scrollingRef.current = true;

      if (event.deltaY > 0) {
        // Scrolling down: If not on the last card, go to the next card.
        if (currentCard < cardData.length - 1) {
          setCurrentCard((prev) => prev + 1);
        }
      } else if (event.deltaY < 0) {
        // Scrolling up: If not on the first card, go to the previous card.
        if (currentCard > 0) {
          setCurrentCard((prev) => prev - 1);
        }
      }

      // Reset the scroll lock after the transition completes.
      setTimeout(() => {
        scrollingRef.current = false;
      }, 900);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentCard]);

  return (
    <div className={styles.cardsContainer} ref={containerRef}>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`${styles.cardContainer} ${
            index === currentCard ? styles.active : styles.inactive
          }`}
        >
          <div
            className={styles.card}
            style={{
              backgroundColor: card.bgColor,
              color: card.textColor,
              flexDirection: card.flexDirection,
              transform: card.transform,
            }}
          >
            <div className={styles.cardContent}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
            <div className={styles.cardImage}>
              <img src={card.image} alt={`Card ${index + 1}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;
