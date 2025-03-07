import React, { useState } from "react";
import CardViewStyles from "./css/Card.module.css";
import profileImage from "../../../../assets/profile-image.png"
import { Bookmark, Share2, MoreVertical, PlayCircle, MapPin, Calendar, Briefcase, GraduationCap, Clock } from 'lucide-react';

const Card = ({ profile }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getTimeAgo = (dateString) => {
    if (!dateString) return 'Recently applied';
    const date = new Date(dateString);
    const now = new Date();
    const diffInMonths = (now.getFullYear() - date.getFullYear()) * 12 + now.getMonth() - date.getMonth();
    
    if (diffInMonths === 0) return 'Applied this month';
    if (diffInMonths === 1) return 'Applied 1 month ago';
    return `Applied ${diffInMonths} months ago`;
  };

  // Ensure skills is an array and handle empty/null cases
  const skills = Array.isArray(profile?.skills) ? profile.skills : [];
  const displaySkills = skills.slice(0, 3);
  const remainingSkills = Math.max(0, skills.length - 3);

  // Handle experience array safely
  const experiences = Array.isArray(profile?.experience) ? profile.experience : [];

  return (
    <div className={CardViewStyles.card}>
      <div className={CardViewStyles.cardHeader}>
        <div className={CardViewStyles.profileInfo}>
          <div className={CardViewStyles.avatarWrapper}>
            <img 
              src={profile?.profilePhoto || profileImage} 
              alt={`${profile?.firstName || 'User'} ${profile?.lastName || ''}`} 
              className={CardViewStyles.avatar}
              onError={(e) => {
                e.target.src = '/default-avatar.png';
                e.target.onerror = null;
              }}
            />
            <span className={CardViewStyles.statusIndicator} />
          </div>
          <div className={CardViewStyles.nameSection}>
            <h3 className={CardViewStyles.name}>
              {profile?.firstName || ''} {profile?.lastName || ''}
            </h3>
            {profile?.profileBanner?.location && (
              <div className={CardViewStyles.location}>
                <MapPin size={14} />
                <span>{profile.profileBanner.location}</span>
              </div>
            )}
          </div>
        </div>

        <div className={CardViewStyles.actions}>
          <button 
            className={`${CardViewStyles.actionButton} ${isBookmarked ? CardViewStyles.active : ''}`}
            onClick={() => setIsBookmarked(!isBookmarked)}
            title="Bookmark candidate"
          >
            <Bookmark size={18} />
          </button>
          <button 
            className={CardViewStyles.actionButton}
            title="View video profile"
          >
            <PlayCircle size={18} />
          </button>
          <button 
            className={CardViewStyles.actionButton}
            title="Share profile"
          >
            <Share2 size={18} />
          </button>
          <div className={CardViewStyles.moreActionsWrapper}>
            <button 
              className={`${CardViewStyles.actionButton} ${showActions ? CardViewStyles.active : ''}`}
              onClick={() => setShowActions(!showActions)}
              title="More actions"
            >
              <MoreVertical size={18} />
            </button>
            {showActions && (
              <div className={CardViewStyles.actionsDropdown}>
                <button>View Profile</button>
                <button>Download Resume</button>
                <button>Schedule Interview</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {displaySkills.length > 0 && (
        <div className={CardViewStyles.tags}>
          {displaySkills.map((skill, index) => (
            <span key={index} className={CardViewStyles.tag}>
              {skill}
            </span>
          ))}
          {remainingSkills > 0 && (
            <span className={CardViewStyles.moreTag}>
              +{remainingSkills}
            </span>
          )}
        </div>
      )}

      <div className={CardViewStyles.details}>
        <div className={CardViewStyles.currentRole}>
          <h4>{profile?.currentRole || "Actively Looking"}</h4>
          <span className={CardViewStyles.appliedDate}>
            <Clock size={14} />
            {getTimeAgo(profile?.appliedDate)}
          </span>
        </div>

        {experiences.length > 0 && (
          <div className={CardViewStyles.experienceSection}>
            <div className={CardViewStyles.sectionHeader}>
              <Briefcase size={16} />
              <h5>Experience</h5>
            </div>
            {experiences.map((exp, index) => (
              <div key={index} className={CardViewStyles.experienceItem}>
                <p>{exp?.role || 'Role'} at {exp?.company || 'Company'}</p>
                <span className={CardViewStyles.date}>
                  <Calendar size={14} />
                  {formatDate(exp?.startDate)} - {exp?.endDate ? formatDate(exp?.endDate) : 'Present'}
                </span>
              </div>
            ))}
          </div>
        )}

        {profile?.education && (
          <div className={CardViewStyles.educationSection}>
            <div className={CardViewStyles.sectionHeader}>
              <GraduationCap size={16} />
              <h5>Education</h5>
            </div>
            <div className={CardViewStyles.educationItem}>
              <p>{profile.education?.degree || 'Degree'} at {profile.education?.school || 'School'}</p>
              <span className={CardViewStyles.date}>
                <Calendar size={14} />
                {formatDate(profile.education?.startDate)} - {formatDate(profile.education?.endDate)}
              </span>
            </div>
          </div>
        )}

        <div className={CardViewStyles.workExperience}>
          <strong>Total Experience:</strong> {profile?.totalExperience || "Not specified"}
        </div>
      </div>
    </div>
  );
};

export default Card;