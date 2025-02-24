import React, { useState } from "react";
import styles from "./css/HomeFAQ.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const HomeFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is this platform about?",
      answer:
        "Our platform connects job seekers with opportunities, offering AI-powered job matching, skill development resources, and a professional network. We help you build your career path with personalized recommendations and industry insights.",
    },
    {
      id: 2,
      question: "How can I find the right job opportunities?",
      answer:
        "Our smart job matching system analyzes your profile, skills, and preferences to recommend relevant positions. You can also use advanced filters, save searches, and get real-time notifications for new openings.",
    },
    {
      id: 3,
      question: "What makes this platform unique?",
      answer:
        "We combine AI technology with human expertise to provide personalized job recommendations, skill assessments, and career guidance. Our platform also offers exclusive access to industry events, mentorship programs, and learning resources.",
    },
    {
      id: 4,
      question: "Is it free to join?",
      answer:
        "Yes, basic membership is completely free! You can create a profile, search jobs, and connect with professionals. We also offer premium features for enhanced career development and networking opportunities.",
    },
    {
      id: 5,
      question: "How can employers use this platform?",
      answer:
        "Employers can post jobs, access our talent pool, use AI-powered candidate matching, and manage their hiring process through our ATS integration. We also provide analytics and tools to optimize recruitment strategies.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqHeader}>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about our platform</p>
      </div>
      <div className={styles.faqList}>
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`${styles.faqItem} ${
              openFAQ === faq.id ? styles.active : ""
            }`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className={styles.questionText}>{faq.question}</span>
              <span className={styles.icon}>
                {openFAQ === faq.id ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            <div className={styles.faqAnswer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFAQ;
