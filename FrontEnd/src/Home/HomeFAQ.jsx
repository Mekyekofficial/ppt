import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine  } from "react-icons/ri";
import styles from './css/HomeFAQ.module.css';

const faqData = [
    {
        question: "What is this platform about?",
        answer: "This platform connects job seekers with companies, allowing professionals to network, share their experiences, and find employment opportunities.",
    },
    {
        question: "Can I apply for jobs directly through this platform?",
        answer: "Yes, this platform allows you to apply for jobs directly and connect with potential employers.",
    },
    {
        question: "Can I connect with recruiters and hiring managers?",
        answer: "Yes, you can connect with recruiters and hiring managers to expand your professional network.",
    },
    {
        question: "How can I increase my visibility to employers?",
        answer: "By optimizing your profile and engaging with relevant job listings, you can increase your visibility to employers.",
    },
    {
        question: "Is this platform free to use?",
        answer: "Yes, this platform is free to use for job seekers and professionals.",
    },
    {
        "question": "What is the difference between a CV and a resume?",
        "answer": "While both CVs and resumes are used to showcase your qualifications and experiences, a CV is typically a more detailed document that includes a comprehensive overview of your academic and professional history, research publications, and other scholarly achievements. A resume, on the other hand, is a concise summary of your relevant skills and experiences tailored to a specific job or industry."
      },
      {
        "question": "How can I improve my interview skills?",
        "answer": "To improve your interview skills, practice common interview questions, research the company and the role, dress professionally, maintain good eye contact, speak clearly and confidently, and actively listen to the interviewer's questions. It's also helpful to prepare thoughtful questions to ask the interviewer."
      },
      {
        "question": "What are some common interview mistakes to avoid?",
        "answer": "Some common interview mistakes to avoid include arriving late, dressing inappropriately, not doing enough research on the company, talking too much or too little, being overly negative, and forgetting to send a thank-you note after the interview."
      },
      {
        "question": "How can I network effectively on this platform?",
        "answer": "To network effectively on this platform, join relevant groups, participate in discussions, send connection requests to people in your industry, and attend virtual events. Be genuine, offer value, and build relationships with other professionals."
      },
      {
        "question": "What are some tips for writing a strong cover letter?",
        "answer": "A strong cover letter should be tailored to the specific job you're applying for, highlight your most relevant skills and experiences, and clearly explain why you're a good fit for the position. Be concise, professional, and proofread carefully."
      },
      {
        "question": "What is the importance of soft skills in the workplace?",
        "answer": "Soft skills, such as communication, teamwork, problem-solving, and time management, are essential for success in the workplace. They help you build strong relationships with colleagues, collaborate effectively, and navigate challenges. Strong soft skills can make you a more valuable asset to any organization."
      },
      {
        "question": "How can I stay updated on industry trends and job opportunities?",
        "answer": "To stay updated, follow industry news and publications, attend webinars and conferences, connect with professionals on social media, and use job search platforms to explore current opportunities. Continuous learning and networking can help you stay ahead of the curve."
      },
      {
        "question": "What are some common job search mistakes to avoid?",
        "answer": "Common job search mistakes include neglecting your network, applying for too many jobs without tailoring your applications, not following up after interviews, and having a weak online presence. Focus on quality over quantity and build strong relationships with recruiters and hiring managers."
      },
      {
        "question": "How can I prepare for a remote interview?",
        "answer": "To prepare for a remote interview, choose a quiet and well-lit space, test your equipment beforehand, dress professionally, and practice your video conferencing etiquette. Be mindful of your body language and eye contact, and be prepared to answer questions about your remote work experience and time management skills."
      },
      {
        "question": "What are some tips for negotiating a job offer?",
        "answer": "When negotiating a job offer, be prepared to discuss salary, benefits, and other important terms. Do your research, know your worth, and be confident in your abilities. Practice active listening, ask clarifying questions, and be open to compromise. It's also important to be respectful and professional throughout the negotiation process."
      }
];

const HomeFAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(faqData[0]);
  const [visibleFAQs, setVisibleFAQs] = useState(faqData.slice(0, 4));

  const handleFAQClick = (faq) => {
    setSelectedFAQ(faq);
  };

  const handleScrollUpFAQs = () => {
    setVisibleFAQs((prev) => {
      const newStartIndex = (faqData.indexOf(prev[0]) - 4) % faqData.length;
      return faqData.slice(newStartIndex, newStartIndex + 4);
    });
  };

  const handleScrollDownFAQs = () => {
    setVisibleFAQs((prev) => {
      const newStartIndex = (faqData.indexOf(prev[0]) + 4) % faqData.length;
      return faqData.slice(newStartIndex, newStartIndex + 4);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.faqSection}>
        <h2 className={styles.title}>FAQS</h2>
        <RiArrowDropUpLine className={styles.scrollIcon} onClick={handleScrollUpFAQs} />
        <div className={styles.faqList}>
          {visibleFAQs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${selectedFAQ === faq ? styles.active : ""}`}
              onClick={() => handleFAQClick(faq)}
              onMouseEnter={() => handleFAQClick(faq)}
            >
              {faq.question}
            </div>
          ))}
        </div>
        <RiArrowDropDownLine className={styles.scrollIcon} onClick={handleScrollDownFAQs} />
      </div>
      <div className={styles.answerSection}>
        <p>{selectedFAQ.answer}</p>
      </div>
    </div>
  );
};

export default HomeFAQ;
