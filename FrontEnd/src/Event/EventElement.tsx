import React, { useState } from 'react';
import styles from './Css/EventElement.module.css';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: string;
  image: string;
}

interface RecommendedEvent {
  id: number;
  title: string;
  date: string;
  image: string;
}

const EventElement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [startDate, setStartDate] = useState('May 20');
  const [endDate, setEndDate] = useState('Jun 20');
  const [searchLocation, setSearchLocation] = useState('');
  
  // Popup states
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showLocationSearch, setShowLocationSearch] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [isStartDatePicker, setIsStartDatePicker] = useState(true);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [selectedEventDetails, setSelectedEventDetails] = useState<RecommendedEvent | null>(null);
  const [tempLocation, setTempLocation] = useState('');

  const events: Event[] = [
    {
      id: 1,
      title: 'Tech Conference 2025',
      date: 'May 25-27, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco Convention Center',
      description: 'Join the biggest tech conference of the year featuring keynotes from industry leaders, workshops, and networking opportunities.',
      attendees: '1250 attending',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Career Development Workshop',
      date: 'Jun 5, 2025',
      time: '1:00 PM - 3:00 PM',
      location: 'Virtual',
      description: 'Boost your career with expert advice on resume building, interview skills, and professional development strategies.',
      attendees: '850 attending',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Digital Marketing Summit',
      date: 'Jun 18, 2025',
      time: '1:00 PM - 3:00 PM',
      location: 'Innovation Hub, Boston',
      description: 'Explore the latest trends and strategies in digital marketing with keynotes from industry leaders and hands-on workshops.',
      attendees: '950 attending',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Startup Pitch Competition',
      date: 'Jun 22, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual',
      description: 'Watch innovative startups pitch their ideas to a panel of investors and industry experts. Networking reception to follow.',
      attendees: '650 attending',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop'
    }
  ];

  const recommendedEvents: RecommendedEvent[] = [
    {
      id: 1,
      title: 'Product Management Masterclass',
      date: 'Jun 10 • Virtual',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=120&fit=crop'
    },
    {
      id: 2,
      title: 'Cybersecurity Conference',
      date: 'Jul 15 • Washington DC',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=120&fit=crop'
    },
    {
      id: 3,
      title: 'Remote Work Summit',
      date: 'Jun 22 • Virtual',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=200&h=120&fit=crop'
    }
  ];

  const categories = [
    'All',
    'Technology',
    'Business',
    'Design',
    'Marketing',
    'Networking',
    'Career'
  ];

  const handleRegister = (eventId: number) => {
    setConfirmationMessage(`Successfully registered for event ${eventId}!`);
    setShowConfirmation(true);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleTabChange = (tab: 'upcoming' | 'past') => {
    setActiveTab(tab);
  };

  const handleLocationClick = () => {
    setTempLocation(searchLocation);
    setShowLocationSearch(true);
  };

  const handleCategoryFilterClick = () => {
    const currentIndex = categories.indexOf(selectedCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    setSelectedCategory(categories[nextIndex]);
  };

  const handleDateClick = (isStartDate: boolean) => {
    setIsStartDatePicker(isStartDate);
    setShowDatePicker(true);
  };

  const handleRecommendedEventClick = (eventId: number) => {
    const event = recommendedEvents.find(e => e.id === eventId);
    if (event) {
      setSelectedEventDetails(event);
      setShowEventDetails(true);
    }
  };

  const handleDateConfirm = (date: string) => {
    if (isStartDatePicker) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
    setShowDatePicker(false);
  };

  const handleLocationConfirm = () => {
    setSearchLocation(tempLocation);
    setShowLocationSearch(false);
  };

  const closeAllPopups = () => {
    setShowDatePicker(false);
    setShowLocationSearch(false);
    setShowConfirmation(false);
    setShowEventDetails(false);
  };

  const CalendarIcon = () => (
    <div className={styles.calendarIcon}></div>
  );

  const LocationIcon = () => (
    <div className={styles.locationIcon}></div>
  );

  const CategoryIcon = () => (
    <div className={styles.categoryIcon}></div>
  );

  return (
    <div className={styles.eventsContainer}>
      {/* Left Sidebar */}
      <div className={styles.leftSidebar}>
        {/* Event Categories */}
        <div className={styles.eventCategories}>
          <h3 className={styles.categoriesTitle}>Event Categories</h3>
          <div className={styles.categoriesList}>
            {categories.map((category) => (
              <p 
                key={category} 
                className={styles.categoryItem}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </p>
            ))}
          </div>
        </div>

        {/* Your Events */}
        <div className={styles.yourEvents}>
          <h3 className={styles.yourEventsTitle}>Your Events</h3>
          <div className={styles.yourEventsList}>
            <div className={styles.yourEventsItem}>
              <p className={styles.yourEventsItemLabel}>Registered Events</p>
              <div className={styles.yourEventsItemCount}>
                <p className={styles.yourEventsItemNumber}>0</p>
              </div>
            </div>
            <div className={styles.yourEventsItem}>
              <p className={styles.yourEventsItemLabel}>Saved Events</p>
              <div className={styles.yourEventsItemCount}>
                <p className={styles.yourEventsItemNumber}>12</p>
              </div>
            </div>
            <div className={styles.yourEventsItem}>
              <p className={styles.yourEventsItemLabel}>Past Events</p>
              <div className={styles.yourEventsItemCount}>
                <p className={styles.yourEventsItemNumber}>9</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <h1 className={styles.eventsTitle}>Events</h1>
          <p className={styles.eventsSubtitle}>
            Discover and connect with like-minded professionals at events
          </p>
        </div>

        {/* Create Events Button */}
        {/* <div className={styles.createEventsButton} onClick={() => alert('Create Event functionality')}>
          Create Event
        </div> */}

        {/* Location and Category Filters */}
        <div className={styles.locationFilter} onClick={handleLocationClick}>
          <LocationIcon />
          <p className={styles.locationText}>
            {searchLocation || 'Search location...'}
          </p>
        </div>
        <div className={styles.categoryFilter} onClick={handleCategoryFilterClick}>
          <CategoryIcon />
          <p className={styles.categoryText}>Category: {selectedCategory}</p>
        </div>

        {/* Date Range Section */}
        <div className={styles.dateRangeSection}>
          <div className={styles.datePicker} onClick={() => handleDateClick(true)}>
            <p className={styles.dateText}>{startDate}</p>
            <CalendarIcon />
          </div>
          <p className={styles.toText}>to</p>
          <div className={styles.datePicker} onClick={() => handleDateClick(false)}>
            <p className={styles.dateText}>{endDate}</p>
            <CalendarIcon />
          </div>
        </div>

        {/* Events Tab Section */}
        <div className={styles.eventsTabSection}>
          <button
            className={activeTab === 'upcoming' ? styles.tabActive : styles.tabInactive}
            onClick={() => handleTabChange('upcoming')}
          >
            <p className={activeTab === 'upcoming' ? styles.tabTextActive : styles.tabTextInactive}>
              Upcoming Events
            </p>
          </button>
          <button
            className={activeTab === 'past' ? styles.tabActive : styles.tabInactive}
            onClick={() => handleTabChange('past')}
          >
            <p className={activeTab === 'past' ? styles.tabTextActive : styles.tabTextInactive}>
              Past Events
            </p>
          </button>
        </div>

        {/* Event Cards */}
        {events.map((event, index) => (
          <div key={event.id} className={`${styles.eventCard} ${styles[`eventCard${index + 1}`]}`}>
            <div 
              className={styles.eventImage}
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundColor: '#f0f0f0'
              }}
            ></div>
            <div className={styles.eventContent}>
              <div className={styles.eventDetails}>
                <div className={styles.eventHeader}>
                  <div className={styles.eventTitleSection}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventDate}>{event.date}</p>
                  </div>
                  <p className={styles.eventTime}>{event.time}</p>
                </div>
                <div className={styles.eventInfo}>
                  <p className={styles.eventLocation}>{event.location}</p>
                  <p className={styles.eventDescription}>{event.description}</p>
                  <p className={styles.eventAttendees}>{event.attendees}</p>
                </div>
              </div>
              <div className={styles.eventFooter}>
                <button 
                  className={styles.registerButton}
                  onClick={() => handleRegister(event.id)}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className={styles.rightSidebar}>
        {/* Recommended Events */}
        <div className={styles.recommendedEvents}>
          <h3 className={styles.recommendedTitle}>Recommended for you</h3>
          <div className={styles.recommendedList}>
            {recommendedEvents.map((event) => (
              <div key={event.id} className={styles.recommendedItem} onClick={() => handleRecommendedEventClick(event.id)}>
                <div 
                  className={styles.recommendedImage}
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backgroundColor: '#f0f0f0'
                  }}
                ></div>
                <div className={styles.recommendedContent}>
                  <p className={styles.recommendedItemTitle}>{event.title}</p>
                  <p className={styles.recommendedItemDate}>{event.date}</p>
                  <p className={styles.recommendedItemLink}>View details</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Overlays */}
      {(showDatePicker || showLocationSearch || showConfirmation || showEventDetails) && (
        <div className={styles.popupOverlay} onClick={closeAllPopups}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            
            {/* Date Picker Popup */}
            {showDatePicker && (
              <div className={styles.datePickerPopup}>
                <h3 className={styles.popupTitle}>
                  Select {isStartDatePicker ? 'Start' : 'End'} Date
                </h3>
                <div className={styles.datePickerGrid}>
                  <div className={styles.monthSelector}>
                    <button onClick={() => handleDateConfirm('Jan 15')}>Jan 15</button>
                    <button onClick={() => handleDateConfirm('Feb 20')}>Feb 20</button>
                    <button onClick={() => handleDateConfirm('Mar 25')}>Mar 25</button>
                    <button onClick={() => handleDateConfirm('Apr 10')}>Apr 10</button>
                    <button onClick={() => handleDateConfirm('May 20')}>May 20</button>
                    <button onClick={() => handleDateConfirm('Jun 15')}>Jun 15</button>
                    <button onClick={() => handleDateConfirm('Jul 25')}>Jul 25</button>
                    <button onClick={() => handleDateConfirm('Aug 30')}>Aug 30</button>
                    <button onClick={() => handleDateConfirm('Sep 10')}>Sep 10</button>
                    <button onClick={() => handleDateConfirm('Oct 20')}>Oct 20</button>
                    <button onClick={() => handleDateConfirm('Nov 15')}>Nov 15</button>
                    <button onClick={() => handleDateConfirm('Dec 25')}>Dec 25</button>
                  </div>
                </div>
                <div className={styles.popupActions}>
                  <button className={styles.cancelButton} onClick={closeAllPopups}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Location Search Popup */}
            {showLocationSearch && (
              <div className={styles.locationSearchPopup}>
                <h3 className={styles.popupTitle}>Search Location</h3>
                <input
                  type="text"
                  className={styles.locationInput}
                  placeholder="Enter location..."
                  value={tempLocation}
                  onChange={(e) => setTempLocation(e.target.value)}
                />
                <div className={styles.locationSuggestions}>
                  <div className={styles.suggestionItem} onClick={() => setTempLocation('New York, NY')}>
                    📍 New York, NY
                  </div>
                  <div className={styles.suggestionItem} onClick={() => setTempLocation('San Francisco, CA')}>
                    📍 San Francisco, CA
                  </div>
                  <div className={styles.suggestionItem} onClick={() => setTempLocation('Los Angeles, CA')}>
                    📍 Los Angeles, CA
                  </div>
                  <div className={styles.suggestionItem} onClick={() => setTempLocation('Chicago, IL')}>
                    📍 Chicago, IL
                  </div>
                  <div className={styles.suggestionItem} onClick={() => setTempLocation('Virtual')}>
                    🌐 Virtual
                  </div>
                </div>
                <div className={styles.popupActions}>
                  <button className={styles.cancelButton} onClick={closeAllPopups}>
                    Cancel
                  </button>
                  <button className={styles.confirmButton} onClick={handleLocationConfirm}>
                    Confirm
                  </button>
                </div>
              </div>
            )}

            {/* Confirmation Popup */}
            {showConfirmation && (
              <div className={styles.confirmationPopup}>
                <div className={styles.successIcon}>✓</div>
                <p className={styles.confirmationMessage}>{confirmationMessage}</p>
                <div className={styles.popupActions}>
                  <button className={styles.confirmButton} onClick={closeAllPopups}>
                    OK
                  </button>
                </div>
              </div>
            )}

            {/* Event Details Popup */}
            {showEventDetails && selectedEventDetails && (
              <div className={styles.eventDetailsPopup}>
                <div className={styles.eventDetailsHeader}>
                  <div 
                    className={styles.eventDetailsImage}
                    style={{
                      backgroundImage: `url(${selectedEventDetails.image})`,
                      backgroundColor: '#f0f0f0'
                    }}
                  ></div>
                  <div className={styles.eventDetailsInfo}>
                    <p className={styles.eventDetailsDate}>{selectedEventDetails.date}</p>
                    <p className={styles.eventDetailsDescription}>
                      Click to view full event details and registration information.
                    </p>
                  </div>
                </div>
                <div className={styles.popupActions}>
                  <button className={styles.cancelButton} onClick={closeAllPopups}>
                    Close
                  </button>
                  <button className={styles.confirmButton} onClick={() => alert('View Event Details')}>
                    View Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventElement;
