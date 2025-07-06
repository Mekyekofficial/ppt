import React, { useState } from 'react';
import { useAuth } from '../hooks/useApi';
import styles from './Css/PostCreation.module.css';
import { 
  FaPhotoVideo, 
  FaUserTag, 
  FaMapMarkerAlt, 
  FaSmile, 
  FaFile,
  FaTimes,
  FaGlobeAmericas,
  FaUserFriends,
  FaLock,
  FaChevronDown,
  FaImage,
  FaVideo,
  FaGift,
  FaCalendarAlt
} from 'react-icons/fa';

interface PostCreationProps {
  onPostCreated?: (post: any) => void;
}

const PostCreation: React.FC<PostCreationProps> = ({ onPostCreated }) => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [visibility, setVisibility] = useState<'public' | 'connections' | 'private'>('public');
  const [feeling, setFeeling] = useState('');
  const [location, setLocation] = useState('');
  const [taggedPeople, setTaggedPeople] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim() && selectedFiles.length === 0) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      const newPost = {
        id: Date.now().toString(),
        author: {
          name: user?.name || 'You',
          title: user?.title || 'Professional',
          avatar: user?.name?.charAt(0).toUpperCase() || 'U',
          time: 'Just now'
        },
        content: content.trim(),
        image: previewUrls[0] || undefined,
        likes: 0,
        comments: 0,
        shares: 0,
        isLiked: false,
        visibility: visibility,
        feeling: feeling,
        location: location,
        taggedPeople: taggedPeople
      };
      
      // Call parent component callback
      if (onPostCreated) {
        onPostCreated(newPost);
      }
      
      // Reset form
      handleCloseModal();
      
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setContent('');
    setSelectedFiles([]);
    setPreviewUrls([]);
    setFeeling('');
    setLocation('');
    setTaggedPeople([]);
    setIsModalOpen(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(prev => [...prev, ...files]);
    
    // Create preview URLs
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreviewUrls(prev => [...prev, e.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const getVisibilityIcon = () => {
    switch (visibility) {
      case 'public':
        return <FaGlobeAmericas />;
      case 'connections':
        return <FaUserFriends />;
      case 'private':
        return <FaLock />;
      default:
        return <FaGlobeAmericas />;
    }
  };

  const getVisibilityText = () => {
    switch (visibility) {
      case 'public':
        return 'Public';
      case 'connections':
        return 'Connections';
      case 'private':
        return 'Only me';
      default:
        return 'Public';
    }
  };

  return (
    <>
      {/* Post Creation Trigger */}
      <div className={styles.postCreationContainer}>
        <div className={styles.postCreationCard}>
          <div className={styles.postCreationHeader}>
            <div className={styles.userAvatar}>
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div 
              className={styles.postInput}
              onClick={handleOpenModal}
            >
              <div className={styles.placeholder}>
                Share what's on your mind...
              </div>
            </div>
          </div>

          <div className={styles.postOptions}>
            <button className={styles.optionButton} onClick={handleOpenModal}>
              <FaPhotoVideo className={styles.optionIcon} />
              Photo/Video
            </button>
            <button className={styles.optionButton} onClick={handleOpenModal}>
              <FaUserTag className={styles.optionIcon} />
              Tag people
            </button>
            <button className={styles.optionButton} onClick={handleOpenModal}>
              <FaMapMarkerAlt className={styles.optionIcon} />
              Location
            </button>
            <button className={styles.optionButton} onClick={handleOpenModal}>
              <FaSmile className={styles.optionIcon} />
              Feeling/Activity
            </button>
          </div>
        </div>
      </div>

      {/* Facebook-Style Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Create post</h2>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                <FaTimes />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.userSection}>
                <div className={styles.userAvatar}>
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className={styles.userInfo}>
                  <h3 className={styles.userName}>{user?.name || 'Your Name'}</h3>
                  <div className={styles.visibilitySelector}>
                    <button className={styles.visibilityButton}>
                      {getVisibilityIcon()}
                      <span>{getVisibilityText()}</span>
                      <FaChevronDown />
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.contentSection}>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder={`What's on your mind, ${user?.name || 'there'}?`}
                  className={styles.contentTextarea}
                  rows={4}
                  autoFocus
                />

                {/* File Previews */}
                {previewUrls.length > 0 && (
                  <div className={styles.previewContainer}>
                    {previewUrls.map((url, index) => (
                      <div key={index} className={styles.previewItem}>
                        <img src={url} alt={`Preview ${index}`} className={styles.previewImage} />
                        <button 
                          className={styles.removeButton}
                          onClick={() => removeFile(index)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Enhanced Options */}
                <div className={styles.enhancedOptions}>
                  <div className={styles.optionsHeader}>
                    <span>Add to your post</span>
                  </div>
                  <div className={styles.optionsGrid}>
                    <label className={styles.optionItem}>
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*,video/*" 
                        onChange={handleFileSelect}
                        className={styles.fileInput}
                      />
                      <FaImage className={styles.optionItemIcon} />
                      Photo/Video
                    </label>
                    <button className={styles.optionItem}>
                      <FaUserTag className={styles.optionItemIcon} />
                      Tag people
                    </button>
                    <button className={styles.optionItem}>
                      <FaSmile className={styles.optionItemIcon} />
                      Feeling/Activity
                    </button>
                    <button className={styles.optionItem}>
                      <FaMapMarkerAlt className={styles.optionItemIcon} />
                      Check in
                    </button>
                    <button className={styles.optionItem}>
                      <FaGift className={styles.optionItemIcon} />
                      GIF
                    </button>
                    <button className={styles.optionItem}>
                      <FaCalendarAlt className={styles.optionItemIcon} />
                      Event
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button 
                className={`${styles.postButton} ${(content.trim() || selectedFiles.length > 0) ? styles.active : ''}`}
                onClick={handleSubmit}
                disabled={(!content.trim() && selectedFiles.length === 0) || isLoading}
              >
                {isLoading ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCreation;
