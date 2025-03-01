import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import styles from "./css/SearchBar.module.css";
import ProfileImage from "../../assets/profile-image.png";
import { toast } from "react-toastify";
import API from "../../api";

const SearchBar = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const userInfo = JSON.parse(localStorage.getItem("user-info")) || {};
  const { firstName, lastName, profilePhoto, _id } = userInfo;

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    toast.info("File selected");
    toast.info("File selected");
  };

  const handlePost = async () => {
    if (!content.trim() && !file) {
      toast.error("Please enter content or upload a file");
      return;
    }

    const postData = new FormData();
    postData.append("content", content);
    postData.append("postOn", new Date().toISOString());
    postData.append("firstName", firstName || "Anonymous");
    postData.append("lastName", lastName || "User");
    postData.append("profilePhoto", profilePhoto || ProfileImage);
    postData.append("userId", _id);

    if (file) {
      postData.append("file", file);
    }

    for (let [key, value] of postData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await API.post("/feeds/post", postData, {
        headers: { "Content-Type": "multipart/form-data" },

      });

      if (response.status === 201) {
        toast.success("Posted successfully");
        setContent("");
        setFile(null);
      } else {
        toast.error("Failed to post data");
      }

    } catch (error) {
      console.error("Error posting:", error);
      toast.error("Failed to post");
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.inputContainer}>
        <img src={profilePhoto || ProfileImage} alt="Profile" className={styles.profileImage} onClick={()=>navigate(`/profile/${_id}`)} style={{cursor:'pointer'}}/>
        <input
          type="text"
          placeholder="What’s on your mind?"
          className={styles.inputField}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <hr className={styles.separator} />
      <div className={styles.actions}>
        <label className={styles.action}>
          <input type="file" onChange={handleFileChange} style={{ display: "none" }} />
          <svg className={styles.icon} viewBox="0 0 420 387" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.375 140.081C39.375 110.271 39.375 95.3657 46.9666 84.9168C49.4183 81.5422 52.386 78.5746 55.7605 76.1228C66.2094 68.5312 81.1146 68.5312 110.925 68.5312H180.152C186.473 68.5312 189.634 68.5312 192.652 68.9978C198.925 69.9674 204.874 72.4248 210.002 76.1645C212.469 77.9641 214.709 80.1948 219.188 84.6562C223.666 89.1177 225.906 91.3484 228.373 93.148C233.501 96.8877 239.45 99.3451 245.723 100.315C248.741 100.781 251.902 100.781 258.223 100.781H309.075C338.885 100.781 353.791 100.781 364.239 108.373C367.614 110.825 370.582 113.792 373.033 117.167C380.625 127.616 380.625 142.521 380.625 172.331V246.919C380.625 276.729 380.625 291.634 373.033 302.083C370.582 305.458 367.614 308.425 364.239 310.877C353.791 318.469 338.885 318.469 309.075 318.469H110.925C81.1146 318.469 66.2094 318.469 55.7605 310.877C52.386 308.425 49.4183 305.458 46.9666 302.083C39.375 291.634 39.375 276.729 39.375 246.919V140.081Z" fill="#292556"/>
          </svg>
          <span>File</span>
        </label>
        <label className={styles.action}>
          <input type="file" onChange={handleFileChange} style={{ display: "none" }} />
          <svg className={styles.icon} viewBox="0 0 383 351" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.2562 40.2188H327.744C335.806 40.2188 339.837 40.2188 342.662 42.2718C343.575 42.9349 344.378 43.7374 345.041 44.6501C347.094 47.4759 347.094 51.5068 347.094 59.5687V238.266V290.213C347.094 298.274 347.094 302.305 345.041 305.131C344.378 306.044 343.575 306.846 342.662 307.509C339.837 309.562 335.806 309.562 327.744 309.562H55.2563C47.1943 309.562 43.1634 309.562 40.3376 307.509C39.4249 306.846 38.6224 306.044 37.9593 305.131C35.9062 302.305 35.9062 298.274 35.9062 290.213V238.266V59.5688C35.9062 51.5068 35.9062 47.4759 37.9593 44.6501C38.6224 43.7374 39.4249 42.9349 40.3376 42.2718C43.1634 40.2188 47.1943 40.2188 55.2562 40.2188ZM299.219 120.656C299.219 140.849 281.357 157.219 259.323 157.219C237.289 157.219 219.427 140.849 219.427 120.656C219.427 100.463 237.289 84.0938 259.323 84.0938C281.357 84.0938 299.219 100.463 299.219 120.656ZM124.839 121.777L60.597 230.29C60.2645 230.852 60.0982 231.133 59.9967 231.438C59.963 231.54 59.9348 231.643 59.9121 231.747C59.8438 232.062 59.8438 232.388 59.8438 233.041V280.474C59.8438 283.474 59.8438 284.973 60.6077 286.025C60.8544 286.364 61.153 286.663 61.4926 286.91C62.5441 287.674 64.044 287.674 67.0437 287.674H315.956C318.956 287.674 320.456 287.674 321.507 286.91C321.847 286.663 322.146 286.364 322.392 286.025C323.156 284.973 323.156 283.474 323.156 280.474V233.677C323.156 232.75 323.156 232.286 323.023 231.855C322.98 231.712 322.925 231.573 322.86 231.438C322.665 231.031 322.35 230.691 321.721 230.011L321.72 230.01L321.72 230.01L273.699 178.102C272.695 177.017 272.192 176.474 271.562 176.345C271.359 176.303 271.15 176.293 270.943 176.316C270.304 176.386 269.754 176.879 268.653 177.867L211.795 228.865C210.556 229.976 209.937 230.532 209.237 230.572C209.012 230.585 208.787 230.559 208.57 230.497C207.896 230.303 207.416 229.624 206.454 228.266L206.454 228.266L130.875 121.53C129.6 119.73 128.963 118.83 128.132 118.698C127.869 118.656 127.6 118.667 127.341 118.73C126.524 118.93 125.962 119.879 124.839 121.777Z" fill="#292556"/>
          </svg>
          <span>Photo</span>
        </label>

        <button className={styles.postButton} onClick={handlePost}>Post</button>
      </div>
    </div>
  );
};

export default SearchBar;