import React, { useState } from "react";
import styles from "./css/HomeFeedback.module.css";
import { FaStar } from "react-icons/fa";

const HomeFeedback = () => {
  const [activeBubble, setActiveBubble] = useState(null);

  const feedbacks = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Developer",
      rating: 5,
      message: "Found my dream job through this platform!",
      size: 120,
      position: { x: 20, y: 30 },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "UX Designer",
      rating: 5,
      message: "The AI matching system is incredibly accurate.",
      size: 140,
      position: { x: 60, y: 50 },
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Product Manager",
      rating: 5,
      message: "Great community and learning resources.",
      size: 100,
      position: { x: 40, y: 70 },
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Data Scientist",
      rating: 5,
      message: "Transformed my career journey!",
      size: 130,
      position: { x: 75, y: 20 },
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "Frontend Developer",
      rating: 5,
      message: "Best platform for tech professionals.",
      size: 110,
      position: { x: 85, y: 60 },
    },
    {
      id: 6,
      name: "David Kim",
      role: "Full Stack Developer",
      rating: 5,
      message: "Amazing learning opportunities!",
      size: 125,
      position: { x: 15, y: 80 },
    },
    // Empty bubbles for visual effect
    { id: 7, size: 50, position: { x: 90, y: 40 }, isEmpty: true },
    { id: 8, size: 70, position: { x: 25, y: 50 }, isEmpty: true },
    { id: 9, size: 45, position: { x: 70, y: 75 }, isEmpty: true },
    { id: 10, size: 55, position: { x: 10, y: 25 }, isEmpty: true },
    { id: 11, size: 65, position: { x: 80, y: 85 }, isEmpty: true },
    { id: 12, size: 40, position: { x: 35, y: 15 }, isEmpty: true },
  ];

  const handleBubbleClick = (id) => {
    setActiveBubble(id);
    setTimeout(() => setActiveBubble(null), 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>What Our Users Say</h2>
        <p>Click the bubbles to see feedback</p>
      </div>

      <div className={styles.bubbleContainer}>
        <div className={styles.backgroundEffect}></div>
        {feedbacks.map((bubble) => (
          <div
            key={bubble.id}
            className={`${styles.bubble} ${
              activeBubble === bubble.id ? styles.pop : ""
            } ${bubble.isEmpty ? styles.emptyBubble : ""}`}
            style={{
              "--bubble-size": `${bubble.size}px`,
              "--bubble-x": `${bubble.position.x}%`,
              "--bubble-y": `${bubble.position.y}%`,
              "--bubble-color": bubble.color,
              "--float-duration": `${15 + Math.random() * 10}s`,
              "--float-delay": `-${Math.random() * 10}s`,
            }}
            onClick={() => !bubble.isEmpty && handleBubbleClick(bubble.id)}
          >
            {!bubble.isEmpty && (
              <div className={styles.content}>
                <div className={styles.rating}>
                  {[...Array(bubble.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className={styles.message}>{bubble.message}</p>
                <div className={styles.user}>
                  <h4>{bubble.name}</h4>
                  <span>{bubble.role}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeedback;
