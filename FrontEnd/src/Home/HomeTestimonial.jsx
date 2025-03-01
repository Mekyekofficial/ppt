import React, { useState, useEffect } from "react";
import styles from "./css/HomeTestimonial.module.css";

const testimonials = [
  { id: 1, text: "Great experience with this platform!" },
  { id: 2, text: "User-friendly and efficient service." },
  { id: 3, text: "Highly recommend for professionals." },
  { id: 4, text: "Best service I have ever used!" },
  { id: 5, text: "A seamless and smooth experience." },
];

const HomeTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.testimonialContainer}>
      {/* Outer wrapper without overflow hidden */}
      <div className={styles.testimonialSliderOuter}>
        <div className={styles.testimonialSliderWrapper}>
          <div
            className={styles.testimonialSlider}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className={styles.testimonialItem}>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.pagination}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeTestimonial;
