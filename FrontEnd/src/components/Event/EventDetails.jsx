import React, {useState, useEffect} from "react";
import styles from "./css/EventDetails.module.css";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import API from "../../api";

const EventDetails = () => {

    const { eventId } = useParams();

    const [event, setEvent] = useState(null);
    
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await API.get(`posts/events/${eventId}`);
                const event = response.data;
                setEvent(event);
            } catch (error) {
                console.error("Error fetching event:", error);
            }
        };

        fetchEvent();
    }, [eventId]);


  return (
    <div className={styles.container}>
      {/* Event Banner */}
      <div className={styles.banner}>
        <img src={event?.eventImage} alt="Event Banner" className={styles.bannerImg} />
        <div className={styles.eventInfoWrapper}>
            <div className={styles.eventInfo}>
                <h2>
                    {event?.eventName}
                </h2>
                <div className={styles.icons}>
                    <Clock size={20} /> {event?.time}
                    <Calendar size={20} /> {new Date(event?.date).toLocaleDateString()}
                </div>
            </div>
          <button className={styles.getPass}>Get Pass</button>
        </div>
      </div>

      {/* Organizer Card */}
      <div className={styles.detailsGrid}>
        <div className={styles.organizerCard}>
          <img src={event?.author?.profilePhoto} alt="Organizer" className={styles.avatar} />
          <h3>
            {event?.author?.firstName} {event?.author?.lastName}
          </h3>
          <p>Organizer</p>
          <p>Chief Guests: Bill Gates, Mark Zuckerberg</p>
          <p>Time: {event?.time}</p>
          <p>Date: {new Date(event?.date).toLocaleDateString()}</p>
        </div>

        <div className={styles.aboutDetailsEvent}>
            {/* About Section */}
            <div className={styles.aboutEvent}>
            <h3>About this Event :</h3>
            <p>
                {event?.eventType} event hosted by {event?.author?.firstName}{" "}
                {event?.author?.lastName}.
            </p>
            </div>

            {/* Description Section */}
            <div className={styles.description}>
            <h3>Description</h3>
            <p>
                Join us for A New Horizon: Community Gathering, an exciting event
                designed to bring together individuals of all ages, backgrounds,
                and interests to celebrate unity, growth, and the spirit of
                collaboration...
            </p>
            </div>
        </div>

        {/* Location Card */}
        <div className={styles.locationCard}>
          <button className={styles.addressBtn}>
            <MapPin size={18} /> Address : {event?.location}
          </button>
          <div id={styles.map}></div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
