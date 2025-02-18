import React, {useState, useEffect} from "react";
import styles from "./css/ApplicantDetails.module.css";
import { Mail, Phone, MapPin, Bookmark, Play, Share, MoreVertical } from "lucide-react";
import API from "../../../api";
import {toast} from "react-toastify";

const ApplicantDetails = ({ onClose, applicantId }) => {
    if (!applicantId) return;

    const [applicant, setApplicant] = useState({});
    useEffect(() => {
       const fetchApplicant = async () => {
        try {
            const response = await API.get(`/ATS/get?_id=${applicantId}`);
            setApplicant(response.data);
            if (response.status !== 200) toast.error("Failed to fetch applicant details");
          } catch (error) {
               toast.error("Failed to fetch applicant details");
           }
         }
            fetchApplicant();
    },[]);

    useEffect(() => {
        const fetchApplicant = async () => {
            try {
                const response = await API.get(`/profile/get?_id=${applicantId}`);
                setApplicant(response.data);
                if (response.status !== 200) toast.error("Failed to fetch applicant details");
            } catch (error) {
                toast.error("Failed to fetch applicant details");
            }
        }   
        fetchApplicant();
    },[]);

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <div className={styles.profile}>
            <img src={applicant?.profilePhoto} alt="profilePhoto" className={styles.avatar} />
            <div>
              <h2 className={styles.name}>
                {applicant?.firstName} {applicant?.lastName}
              </h2>
              <div className={styles.info}>
                <MapPin size={16} />
                <span>
                    {applicant?.profileBanner?.location}
                </span>
                <Mail size={16} />
                <span>{applicant?.email}</span>
                <Phone size={16} />
                <span>+91 6979831765</span>
              </div>
              <div className={styles.tags}>
                <span>Customer Service</span>
                <span>Problem solving abilities</span>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <Bookmark size={20} />
            <Play size={20} />
            <Share size={20} />
            <MoreVertical size={20} />
          </div>
        </div>

        <div className={styles.body}>
          <p className={styles.experience}>Work Experience :- 2 years 5 months</p>
          <div className={styles.jobDetails}>
            <div>
              <p>Customer Care Executive - Fresher</p>
              <span>Applied 2 months ago</span>
            </div>
            <div>
              <p>Experience :- Academic Counselor at College Dekho</p>
              <span>Sep 2022 - Apr 2023</span>
            </div>
            <div>
              <p>Education :- High School at SDLJS Inter College Kaluamau</p>
              <span>Jul 2009 - Jun 2010</span>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.button}>Schedule Interview</button>
          <button className={styles.button}>Reject</button>
          <button className={styles.button}>Move Applicant</button>
        </div>
      </div>
      <div className={styles.tabs}>
          <span>Resume</span>
          <span>Application</span>
          <span>Interview</span>
          <span>Tests</span>
          <span>Messages</span>
          <span>Track</span>
          <span>Notes</span>
          <span>Emails</span>
          <span>Feedback</span>
        </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </div>
  );
};

export default ApplicantDetails;
