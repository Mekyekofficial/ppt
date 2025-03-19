import React, {useState, useEffect} from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MdOutlinePlayCircle } from "react-icons/md";
import CardViewStyles from "./css/cardView.module.css";
import API from "../../../../api";
import Spinner from "../../../Animation/Spinner";


const ProfileCard = ({ applicants, jobs }) => {
  const [applicantsProfile, setapplicantsProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    applicants.map( async (applicant) => {
      const userId = applicant._id;
      const response = await API.get(`/profile/get?_id=${userId}`); 
      if (response?.status === 200) {
        const profile = response?.data;
        setapplicantsProfile((prevProfiles) => {
          const exists = prevProfiles.some(
            (prof) => prof._id === profile._id
          );
          if (!exists) {
            return [...prevProfiles, profile];
          }
          return prevProfiles;
        });
        setLoading(false);
      }
    });
  }, [applicants]);

    

  return (
    <div className={CardViewStyles.cards}>
      {!loading ? (
        applicantsProfile.map((profile) => (
          <div key={profile?._id} className={CardViewStyles.card}>
            <div className={CardViewStyles["card-header"]}>
              <div className={CardViewStyles.info}>
                <img src={profile?.profilePhoto} alt="avatar" className={CardViewStyles.avatar}/>
                <h3>
                  {profile?.firstName} {profile?.lastName}
                </h3>
                <p>
                  {profile?.profileBanner?.location}
                </p>
              </div>
              <div className={CardViewStyles.actions}>
                <BookmarkIcon className={CardViewStyles.icon} />
                <MdOutlinePlayCircle className={CardViewStyles.icon} />
                <ShareIcon className={CardViewStyles.icon} />
                <MoreVertIcon className={CardViewStyles.icon} />
              </div>
            </div>
  
            <div className={CardViewStyles.tags}>
              <span className={CardViewStyles.tag}>Customer Service</span>
              <span className={CardViewStyles.tag}>Problem solving abilities</span>
            </div>
  
            <div className={CardViewStyles.details}>
              <p><strong>Customer Care Executive - Fresher</strong></p>
              <p className={CardViewStyles["applied-date"]}>Applied 2 months ago</p>
              <p><strong>Experience:</strong> Academic Counselor at College Dekho</p>
              <p className={CardViewStyles.date}>Sep 2022 - Apr 2023</p>
              <p><strong>Education:</strong> High School at SDLJS Inter College Kaluamau</p>
              <p className={CardViewStyles.date}>Jul 2009 - Jun 2010</p>
              <p><strong>Work Experience:</strong> 2 years 5 months</p>
            </div>
          </div>
        ))) : (
          <div className={CardViewStyles.loader}><Spinner /></div>
        )}

    </div>
  );
};



export default ProfileCard;
