import React, { useState, useEffect } from "react";
import styles from "./css/CreateCommunity.module.css";
import createCommunityImg from '../../assets/createCommunity.png';
import API from "../../api";
import { toast } from "react-toastify";

const CreateCommunity = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("user-info"));
        setUserInfo(userInfo);
    }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

const handleButtonClick = () => {
    document.getElementById('imageInput').click();
};

const submit = async () => {
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("file", document.getElementById('imageInput').files[0]);
        formData.append("userId", userInfo._id);

        const response = await API.post("/comunity/post", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.status == 201) {
            toast.success("Community created successfully!");
            onClose();
        } else {
            toast.error("Failed to create community");
        }
    }
    catch (error) {
        console.error(error);
    }
}

return (
    <div className={styles.overlay}>
        <div className={styles.popup}>
            <h2>Create A Community</h2>

            <div className={styles.imageUpload}>
                <label htmlFor="imageInput">
                    <img
                        src={image || createCommunityImg} 
                        alt="Upload"
                        className={styles.uploadPreview}
                    />
                </label>
                <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                />
                <button className={styles.uploadButton} onClick={handleButtonClick}>Add an image</button>
            </div>

            <div className={styles.inputGroup}>
                <label>Name of the Community*</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
            </div>

            <div className={styles.inputGroup}>
                <label>Write a short description*</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength="500"
                    placeholder="Enter description"
                />
                <span>{description.length}/500</span>
            </div>

            <button className={styles.createButton} onClick={submit}>Create</button>
            <button className={styles.closeButton} onClick={onClose}>
                ✖
            </button>
        </div>
    </div>
);
};

export default CreateCommunity;
