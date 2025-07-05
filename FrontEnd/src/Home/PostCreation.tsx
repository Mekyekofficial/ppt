import React, { useState } from 'react';
import styles from './Css/PostCreation.module.css';
import { FaCamera, FaUserTag, FaMapMarkerAlt, FaSmile, FaFile } from 'react-icons/fa';

const PostCreation: React.FC = () => {
  const [postText, setPostText] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [taggedPeople, setTaggedPeople] = useState<string[]>([]);
  const [selectedFeeling, setSelectedFeeling] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<string>('');

  const feelings = ['😊 Happy', '😢 Sad', '😍 Loved', '😎 Cool', '🤔 Thoughtful', '😴 Tired', '🥳 Excited', '😌 Blessed'];
  const activities = ['📖 Reading', '🍕 Eating', '🎵 Listening to music', '🏃‍♂️ Working out', '✈️ Traveling', '💼 Working', '🎮 Gaming', '📺 Watching'];
  const suggestedPeople = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'David Brown', 'Lisa Chen'];

  const handlePost = async () => {
    if (!postText.trim()) return;
    
    setIsPosting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsPosting(false);
    
    // Reset all states
    setPostText('');
    setSelectedFiles([]);
    setTaggedPeople([]);
    setSelectedFeeling('');
    setSelectedActivity('');
    setShowCreatePostModal(false);
    setActiveSection(null);
    
    alert('Post created successfully!');
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files);
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const toggleTagPerson = (person: string) => {
    setTaggedPeople(prev => 
      prev.includes(person) 
        ? prev.filter(p => p !== person)
        : [...prev, person]
    );
  };

  const closeCreatePostModal = () => {
    setShowCreatePostModal(false);
    setActiveSection(null);
  };

  const openCreatePostModal = () => {
    setShowCreatePostModal(true);
  };

  return (
    <div className={styles.container}>
      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {/* Profile Section */}
        <div className={styles.profileSection}>
        {/* Display feeling/activity and tagged people at top */}
        {/* {(selectedFeeling || selectedActivity || taggedPeople.length > 0) && (
          <div className={styles.topFeelingActivity}>
            {selectedFeeling && (
              <div className={styles.topFeeling}>
                <span>{selectedFeeling}</span>
                <button 
                  className={styles.removeTopItem}
                  onClick={() => setSelectedFeeling('')}
                  type="button"
                >
                  ×
                </button>
              </div>
            )}
            {selectedActivity && (
              <div className={styles.topActivity}>
                <span>{selectedActivity}</span>
                <button 
                  className={styles.removeTopItem}
                  onClick={() => setSelectedActivity('')}
                  type="button"
                >
                  ×
                </button>
              </div>
            )}
            {taggedPeople.length > 0 && (
              <div className={styles.topTaggedPeople}>
                <span className={styles.taggedLabel}>With: </span>
                {taggedPeople.map((person, index) => (
                  <span key={index} className={styles.topTaggedPerson}>
                    {person}
                    <button 
                      className={styles.removeTopItem}
                      onClick={() => toggleTagPerson(person)}
                      type="button"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        )} */}
        
        <div className={styles.textBoxAndPfp}>
          <div className={styles.pfp}></div>
          <div className={styles.textBox}>
            <textarea 
              className={styles.textInput}
              placeholder="Share what's on your mind..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              rows={3}
              onClick={openCreatePostModal}
            />
          </div>
        </div>
        
        <div className={styles.ctaAndCreatePost}>
          <div className={styles.createPost}>
            <div 
              className={styles.postOption}
              onClick={openCreatePostModal}
            >
              <FaCamera className={styles.icon} />
              <span className={styles.optionText}>Photo/Video</span>
            </div>
            <div 
              className={styles.postOption}
              onClick={openCreatePostModal}
            >
              <FaUserTag className={styles.icon} />
              <span className={styles.optionText}>Tag people</span>
            </div>
            <div 
              className={styles.postOption}
              onClick={() => alert('Location feature coming soon!')}
            >
              <FaMapMarkerAlt className={styles.icon} />
              <span className={styles.optionText}>Location</span>
            </div>
            <div 
              className={styles.postOption}
              onClick={openCreatePostModal}
            >
              <FaSmile className={styles.icon} />
              <span className={styles.optionText}>Feeling/Activity</span>
            </div>
            <div 
              className={styles.postOption}
              onClick={openCreatePostModal}
            >
              <FaFile className={styles.icon} />
              <span className={styles.optionText}>Files</span>
            </div>
          </div>
          
          <button 
            className={`${styles.cta} ${isPosting ? styles.posting : ''}`}
            onClick={handlePost}
            disabled={!postText.trim() || isPosting}
          >
            <span className={styles.postText}>
              {isPosting ? 'Posting...' : 'Post'}
            </span>
          </button>
        </div>
      </div>
      </div>

      {/* Sidebar Area */}
      <div className={styles.sidebarArea}>
        {/* Topics Section */}
        <div className={styles.topics}>
        <h3 className={styles.trendingTopicsTitle}>Trending Topics</h3>
        <div className={styles.topicsList}>
          <div className={styles.topicItem}>Remote Work Trends</div>
          <div className={styles.topicItem}>AI in recruitment</div>
          <div className={styles.topicItem}>Career Transitions</div>
          <div className={styles.topicItem}>Tech Layoffs</div>
          <div className={styles.topicItem}>Salary Negotiations</div>
        </div>
      </div>
      </div>

      {/* Create Post Modal */}
      {showCreatePostModal && (
        <div className={styles.createPostOverlay} onClick={closeCreatePostModal}>
          <div className={styles.createPostModal} onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className={styles.createPostHeader}>
              <h2>Create Post</h2>
              <button className={styles.closeBtn} onClick={closeCreatePostModal}>×</button>
            </div>

            {/* User Info */}
            <div className={styles.userInfo}>
              <div className={styles.userPfp}></div>
              <div className={styles.userName}>Your Name</div>
            </div>

            {/* Display feeling/activity at top */}
            {(selectedFeeling || selectedActivity) && (
              <div className={styles.modalTopFeelingActivity}>
                {selectedFeeling && (
                  <div className={styles.modalTopFeeling}>
                    <span>{selectedFeeling}</span>
                    <button 
                      className={styles.removeModalTopItem}
                      onClick={() => setSelectedFeeling('')}
                      type="button"
                    >
                      ×
                    </button>
                  </div>
                )}
                {selectedActivity && (
                  <div className={styles.modalTopActivity}>
                    <span>{selectedActivity}</span>
                    <button 
                      className={styles.removeModalTopItem}
                      onClick={() => setSelectedActivity('')}
                      type="button"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Text Area */}
            <div className={styles.textAreaSection}>
              <textarea 
                className={styles.modalTextArea}
                placeholder="What's on your mind?"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                rows={4}
                autoFocus
              />

              {/* Display selected attachments */}
              {selectedFiles.length > 0 && (
                <div className={styles.modalAttachments}>
                  {selectedFiles.map((file, index) => (
                    <div key={index} className={styles.modalAttachment}>
                      <span className={styles.modalFileName}>{file.name}</span>
                      <button 
                        className={styles.modalRemoveBtn}
                        onClick={() => removeFile(index)}
                        type="button"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Display tagged people */}
              {taggedPeople.length > 0 && (
                <div className={styles.modalTags}>
                  <span className={styles.modalTagLabel}>Tagged: </span>
                  {taggedPeople.map((person, index) => (
                    <span key={index} className={styles.modalTag}>
                      {person}
                      <button 
                        className={styles.modalRemoveTag}
                        onClick={() => toggleTagPerson(person)}
                        type="button"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Options Section */}
            <div className={styles.optionsSection}>
              <div className={styles.optionsHeader}>
                <span>Add to your post</span>
              </div>
              
              <div className={styles.optionsButtons}>
                <button 
                  className={`${styles.optionButton} ${activeSection === 'photo' ? styles.active : ''}`}
                  onClick={() => setActiveSection(activeSection === 'photo' ? null : 'photo')}
                >
                  <FaCamera className={styles.optionIcon} />
                  Photo/Video
                  {selectedFiles.length > 0 && <span className={styles.optionBadge}>{selectedFiles.length}</span>}
                </button>
                
                <button 
                  className={`${styles.optionButton} ${activeSection === 'tag' ? styles.active : ''}`}
                  onClick={() => setActiveSection(activeSection === 'tag' ? null : 'tag')}
                >
                  <FaUserTag className={styles.optionIcon} />
                  Tag People
                  {taggedPeople.length > 0 && <span className={styles.optionBadge}>{taggedPeople.length}</span>}
                </button>
                
                <button 
                  className={`${styles.optionButton} ${activeSection === 'feeling' ? styles.active : ''}`}
                  onClick={() => setActiveSection(activeSection === 'feeling' ? null : 'feeling')}
                >
                  <FaSmile className={styles.optionIcon} />
                  Feeling/Activity
                  {(selectedFeeling || selectedActivity) && <span className={styles.optionBadge}>1</span>}
                </button>
                
                <button 
                  className={styles.optionButton}
                  onClick={() => alert('Location feature coming soon!')}
                >
                  <FaMapMarkerAlt className={styles.optionIcon} />
                  Location
                </button>
              </div>
            </div>

            {/* Expandable Sections */}
            {activeSection === 'photo' && (
              <div className={styles.expandedSection}>
                <div className={styles.uploadArea}>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className={styles.fileInput}
                    id="modal-photo-upload"
                  />
                  <label htmlFor="modal-photo-upload" className={styles.uploadLabel}>
                    <FaCamera className={styles.uploadIcon} />
                    <span>Add Photos/Videos</span>
                  </label>
                </div>
              </div>
            )}

            {activeSection === 'tag' && (
              <div className={styles.expandedSection}>
                <div className={styles.peopleGrid}>
                  {suggestedPeople.map((person) => (
                    <div key={person} className={styles.personCard}>
                      <div className={styles.personAvatar}></div>
                      <span className={styles.personName}>{person}</span>
                      <button
                        className={`${styles.personTagBtn} ${taggedPeople.includes(person) ? styles.personTagged : ''}`}
                        onClick={() => toggleTagPerson(person)}
                      >
                        {taggedPeople.includes(person) ? '✓' : '+'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'feeling' && (
              <div className={styles.expandedSection}>
                <div className={styles.feelingsGrid}>
                  <div className={styles.gridSection}>
                    <h4>How are you feeling?</h4>
                    <div className={styles.itemsGrid}>
                      {feelings.map((feeling) => (
                        <button
                          key={feeling}
                          className={`${styles.gridItem} ${selectedFeeling === feeling ? styles.selectedItem : ''}`}
                          onClick={() => setSelectedFeeling(selectedFeeling === feeling ? '' : feeling)}
                        >
                          {feeling}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.gridSection}>
                    <h4>What are you doing?</h4>
                    <div className={styles.itemsGrid}>
                      {activities.map((activity) => (
                        <button
                          key={activity}
                          className={`${styles.gridItem} ${selectedActivity === activity ? styles.selectedItem : ''}`}
                          onClick={() => setSelectedActivity(selectedActivity === activity ? '' : activity)}
                        >
                          {activity}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Post Button */}
            <div className={styles.postButtonSection}>
              <button 
                className={`${styles.modalPostBtn} ${isPosting ? styles.posting : ''} ${!postText.trim() ? styles.disabled : ''}`}
                onClick={handlePost}
                disabled={!postText.trim() || isPosting}
              >
                {isPosting ? 'Posting...' : 'Post'}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default PostCreation;
