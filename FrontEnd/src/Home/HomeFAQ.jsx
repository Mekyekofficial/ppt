import React, { useState } from "react";
import styles from "./css/HomeFAQ.module.css";
import { Plus, Minus } from "lucide-react"; // Using Lucide React for icons

const faqs = [
  {
    id: 1,
    question: "What is this platform about?",
    answer:
      "This platform serves as a bridge between job seekers and companies, providing a space for professionals to network, share insights, and explore career opportunities. Whether you're looking to advance in your field or take the first step in your career, you can connect with industry experts, gain valuable knowledge, and discover job openings that match your skills. By fostering meaningful professional relationships, this platform helps individuals showcase their expertise, learn from others, and stay updated on industry trends. It’s designed to support career growth and make the job search process more accessible, efficient, and rewarding for professionals at all levels.",
  },
  { id: 2, question: "Can I apply for jobs directly through this platform?", answer: "This platform serves as a bridge between job seekers and companies, providing a space for professionals to network, share insights, and explore career opportunities. Whether you're looking to advance in your field or take the first step in your career, you can connect with industry experts, gain valuable knowledge, and discover job openings that match your skills. By fostering meaningful professional relationships, this platform helps individuals showcase their expertise, learn from others, and stay updated on industry trends. It’s designed to support career growth and make the job search process more accessible, efficient, and rewarding for professionals at all levels." },
  { id: 3, question: "Can I connect with recruiters and hiring managers?", answer: "This platform serves as a bridge between job seekers and companies, providing a space for professionals to network, share insights, and explore career opportunities. Whether you're looking to advance in your field or take the first step in your career, you can connect with industry experts, gain valuable knowledge, and discover job openings that match your skills. By fostering meaningful professional relationships, this platform helps individuals showcase their expertise, learn from others, and stay updated on industry trends. It’s designed to support career growth and make the job search process more accessible, efficient, and rewarding for professionals at all levels." },
  { id: 4, question: "How can I increase my visibility to employers?", answer: "This platform serves as a bridge between job seekers and companies, providing a space for professionals to network, share insights, and explore career opportunities. Whether you're looking to advance in your field or take the first step in your career, you can connect with industry experts, gain valuable knowledge, and discover job openings that match your skills. By fostering meaningful professional relationships, this platform helps individuals showcase their expertise, learn from others, and stay updated on industry trends. It’s designed to support career growth and make the job search process more accessible, efficient, and rewarding for professionals at all levels." },
  { id: 5, question: "What strategies can I use to stand out to potential employers?", answer: "This platform serves as a bridge between job seekers and companies, providing a space for professionals to network, share insights, and explore career opportunities. Whether you're looking to advance in your field or take the first step in your career, you can connect with industry experts, gain valuable knowledge, and discover job openings that match your skills. By fostering meaningful professional relationships, this platform helps individuals showcase their expertise, learn from others, and stay updated on industry trends. It’s designed to support career growth and make the job search process more accessible, efficient, and rewarding for professionals at all levels." },
  { id: 6, question: "What strategies can I use to stand out to potential employers?", answer: "This platform serves as a bridge between job seekers and companies, providing a space for professionals to network, share insights, and explore career opportunities. Whether you're looking to advance in your field or take the first step in your career, you can connect with industry experts, gain valuable knowledge, and discover job openings that match your skills. By fostering meaningful professional relationships, this platform helps individuals showcase their expertise, learn from others, and stay updated on industry trends. It’s designed to support career growth and make the job search process more accessible, efficient, and rewarding for professionals at all levels." },
  { id: 7, question: "What strategies can I use to stand out to potential employers?", answer: "This platform serves as a bridge between job seekers and companies, providing a space for professionals to network, share insights, and explore career opportunities. Whether you're looking to advance in your field or take the first step in your career, you can connect with industry experts, gain valuable knowledge, and discover job openings that match your skills. By fostering meaningful professional relationships, this platform helps individuals showcase their expertise, learn from others, and stay updated on industry trends. It’s designed to support career growth and make the job search process more accessible, efficient, and rewarding for professionals at all levels." },
];

const HomeFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={`${styles.faqItem} ${openFAQ === faq.id ? styles.active : ""}`}
          onClick={() => toggleFAQ(faq.id)}
        >
          <div className={styles.faqQuestion}>
            <span className={styles.faqNumber}>{`0${faq.id}`}</span>
            <span className={styles.faqText}>{faq.question}</span>
            {openFAQ === faq.id ? <Minus size={30} className={styles.minus}/> : <Plus size={25}  className={styles.plus}/>}
          </div>
          {openFAQ === faq.id && faq.answer && (
            <div className={styles.faqAnswer}><hr />{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeFAQ;
