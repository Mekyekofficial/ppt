import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/WorkDescription.module.css";
import SampleImage from "../../assets/google.png";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaClock,
  FaFileAlt,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";
import ApplyJob1 from "./ApplyJob/ApplyJob1";
import ApplyJob2 from "./ApplyJob/ApplyJob2";
import ApplyJob3 from "./ApplyJob/ApplyJob3";
import API from "../../api";
import { toast } from "react-toastify";

const WorkDescription = ({ job }) => {
  if (!job) return null;

  const navigate = useNavigate();

  const [applyJobStep, setApplyJobStep] = useState(0);

  const nextApplyJobStep = () => setApplyJobStep((prev) => prev + 1);
  const prevApplyJobStep = () => setApplyJobStep((prev) => prev - 1);
  const closeApplyJobPopup = () => setApplyJobStep(0);

  const [formData, setFormData] = useState({
    jobID: job._id,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    resume: null,
    area: "",
    cityStateCountry: "",
    getEmailUpdates: false,
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await API.post("/company/job-apply", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Application Submitted:", response.data);
      toast.success("Application submitted successfully.");
      setFormData({
        jobID: job._id,
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phoneNumber: "",
        resume: null,
        area: "",
        cityStateCountry: "",
        getEmailUpdates: false,
      });
      closeApplyJobPopup();
      navigate("/work");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Error submitting application. Please try again.");
    }
  };
  return (
    <>
      <div className={styles.container}>
        {/* Tabs */}
        <div className={styles.tabs}>
          <div className={`${styles.tab} ${styles.activeTab}`}>
            Job Description
          </div>
          <div className={styles.tab}>Reviews</div>
          <div className={styles.tab}>FAQs & Discussions</div>
        </div>

        {/* Job Details */}
        <div className={styles.jobDetails}>
          <div className={styles.detailsWithLogo}>
            <img
              src={job.company.companyLogo}
              alt="Company Logo"
              className={styles.logo}
            />
            <div className={styles.details}>
              <h3>
                <svg
                  className={styles.icon}
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2648_5424)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M277.296 233.921C277.296 228.003 282.093 223.206 288.011 223.206H306.942C312.859 223.206 317.657 228.003 317.657 233.921V245.374H277.296V233.921ZM241.582 245.374V233.921C241.582 208.279 262.369 187.492 288.011 187.492H306.942C332.582 187.492 353.371 208.279 353.371 233.921V245.374H360.499C382.314 245.374 399.997 263.058 399.997 284.87V360.5C399.997 382.314 382.314 399.997 360.499 399.997H234.449C212.636 399.997 194.953 382.314 194.953 360.5V284.87C194.953 263.058 212.636 245.374 234.449 245.374H241.582Z"
                      fill="#2859C5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M114.286 0C82.7266 0 57.1429 25.5837 57.1429 57.1429C57.1429 88.702 82.7266 114.286 114.286 114.286C145.845 114.286 171.429 88.702 171.429 57.1429C171.429 25.5837 145.845 0 114.286 0ZM114.286 128.571C51.1674 128.571 0 179.739 0 242.857V278.571C0 286.46 6.39594 292.857 14.2857 292.857H44.6354L57.2683 387.603C58.2146 394.7 64.2686 400 71.4286 400H157.143C161.32 400 165.12 398.197 167.75 395.283C162.315 384.883 159.242 373.051 159.242 360.503V284.873C159.242 246.919 187.357 215.53 223.896 210.398C209.909 163.09 166.128 128.571 114.286 128.571Z"
                      fill="#8FBFFA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2648_5424">
                      <rect width="400" height="400" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {job.jobDescription}
              </h3>
              <div className={styles.companyName}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2648_5417)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 42.8571C0 19.1878 19.1878 0 42.8571 0H214.286C237.955 0 257.143 19.1878 257.143 42.8571V128.334C203.192 146.276 164.286 197.166 164.286 257.143C164.286 290.169 175.895 319.26 190.365 342.857H14.2857C6.39594 342.857 0 336.46 0 328.571V42.8571Z"
                      fill="#8FBFFA"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M96.4252 71.4275C96.4252 61.5652 88.4304 53.5703 78.5681 53.5703C68.7058 53.5703 60.7109 61.5652 60.7109 71.4275V99.9989C60.7109 109.861 68.7058 117.856 78.5681 117.856C88.4304 117.856 96.4252 109.861 96.4252 99.9989V71.4275ZM196.425 71.4275C196.425 61.5652 188.43 53.5703 178.568 53.5703C168.706 53.5703 160.711 61.5652 160.711 71.4275V99.9989C160.711 109.861 168.706 117.856 178.568 117.856C188.43 117.856 196.425 109.861 196.425 99.9989V71.4275ZM78.5681 153.57C88.4304 153.57 96.4252 161.565 96.4252 171.427V199.999C96.4252 209.861 88.4304 217.856 78.5681 217.856C68.7058 217.856 60.7109 209.861 60.7109 199.999V171.427C60.7109 161.565 68.7058 153.57 78.5681 153.57ZM196.328 169.552C195.391 160.571 187.797 153.57 178.568 153.57C168.706 153.57 160.711 161.565 160.711 171.427V199.999C160.711 207.01 164.751 213.077 170.631 215.999C176.105 198.771 184.925 183.035 196.328 169.552ZM146.425 342.856V285.713C146.425 275.851 138.43 267.856 128.568 267.856C118.706 267.856 110.711 275.851 110.711 285.713V342.856H146.425Z"
                      fill="#2859C5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M292.069 397.592C292.071 397.595 292.074 397.598 300 385.712L292.074 397.598C296.874 400.798 303.126 400.798 307.926 397.598L300 385.712C307.926 397.598 307.929 397.595 307.931 397.592L307.943 397.586L307.966 397.569L308.04 397.521L308.28 397.358L309.111 396.786C309.817 396.298 310.82 395.589 312.077 394.678C314.591 392.852 318.131 390.195 322.354 386.792C330.78 380.003 342.046 370.152 353.354 357.901C375.514 333.895 400 298.349 400 257.141C400 201.912 355.229 157.141 300 157.141C244.771 157.141 200 201.912 200 257.141C200 298.349 224.486 333.895 246.646 357.901C257.954 370.152 269.219 380.003 277.645 386.792C281.869 390.195 285.409 392.852 287.923 394.678C289.18 395.589 290.183 396.298 290.889 396.786L291.72 397.358L291.96 397.521L292.034 397.569L292.057 397.586L292.069 397.592Z"
                      fill="#2859C5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M271.43 257.142C271.43 241.362 284.222 228.57 300.001 228.57C315.781 228.57 328.573 241.362 328.573 257.142C328.573 272.921 315.781 285.713 300.001 285.713C284.222 285.713 271.43 272.921 271.43 257.142Z"
                      fill="#8FBFFA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2648_5417">
                      <rect width="400" height="400" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {job.location}
              </div>
              <div className={styles.date}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M57.1462 71.4297C33.4768 71.4297 14.2891 90.6174 14.2891 114.287V342.858C14.2891 366.527 33.4768 385.715 57.1462 385.715H342.861C366.529 385.715 385.718 366.527 385.718 342.858V114.287C385.718 90.6174 366.529 71.4297 342.861 71.4297H57.1462Z"
                    fill="#8FBFFA"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M128.573 42.8605C128.573 27.0809 115.781 14.2891 100.001 14.2891C84.2217 14.2891 71.4297 27.0809 71.4297 42.8605V100.003C71.4297 115.783 84.2217 128.575 100.001 128.575C115.781 128.575 128.573 115.783 128.573 100.003V42.8605ZM328.573 42.8605C328.573 27.0809 315.781 14.2891 300.001 14.2891C284.222 14.2891 271.43 27.0809 271.43 42.8605V100.003C271.43 115.783 284.222 128.575 300.001 128.575C315.781 128.575 328.573 115.783 328.573 100.003V42.8605Z"
                    fill="#2859C5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M292.683 169.591C301.591 177.384 302.491 190.922 294.7 199.829L194.699 314.115C187.318 322.549 174.683 323.872 165.715 317.146L108.573 274.289C99.1049 267.188 97.1863 253.757 104.287 244.289C111.388 234.822 124.819 232.903 134.287 240.004L175.532 270.937L262.446 171.607C270.239 162.7 283.777 161.798 292.683 169.591Z"
                    fill="#2859C5"
                  />
                </svg>
                Posted on: {new Date(job.postedOn).toDateString()}
              </div>
            </div>
          </div>
          <button
            className={styles.applyButton}
            onClick={() => setApplyJobStep(1)}>
            Apply
          </button>
        </div>

        {/* Requirements Section */}
        <h3 className={styles.sectionTitleWrapper}>
          <span className={styles.sectionTitle}>Requirements</span>
        </h3>
        <ul className={styles.requirements}>
          <li>{job.experience}</li>
          <li>
            {job.industryType} {job.role}
          </li>
          <li>{job.qualifications}</li>
          <li>{job.employmentType}</li>
        </ul>

        {/* Additional Information Section */}
        <h3 className={styles.sectionTitleWrapper}>
          <span className={styles.sectionTitle}>Additional Information</span>
        </h3>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <svg
              className={styles.icon}
              viewBox="0 0 637 620"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2651_3999)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M314.746 172.085C370.99 172.085 406.144 111.215 378.02 62.5218C364.97 39.9225 340.85 26 314.746 26C258.502 26 223.35 86.8696 251.471 135.563C264.522 158.162 288.644 172.085 314.746 172.085ZM290.393 427.73H117.572L52.5453 529.866C37.4435 553.581 53.6835 584.747 81.7798 585.966C91.2098 586.373 100.431 583.119 107.514 576.88C98.2798 556.336 100.009 532.522 112.118 513.528L146.943 460.84C153.79 451.356 168.338 452.838 173.131 463.506C175.177 468.057 174.856 473.323 172.273 477.593L137.81 529.866C123.381 553.996 140.492 584.693 168.61 585.122C180.935 585.309 192.524 579.271 199.429 569.064L273.905 452.075H375.634C395.808 452.077 412.164 435.727 412.164 415.556V293.819C412.183 218.85 331.013 171.972 266.06 209.44C252.705 217.143 241.371 227.905 232.989 240.841L233.109 241.278L250.767 305.993H290.391C337.261 305.993 366.557 356.717 343.122 397.295C332.244 416.127 312.145 427.727 290.393 427.73ZM293.972 488.597L231.941 585.986H417.205C413.861 578.305 412.144 570.015 412.164 561.638V478.833C401.061 485.251 388.459 488.619 375.634 488.597H293.972ZM448.696 345.607C462.981 335.64 479.987 330.309 497.404 330.341H558.292V318.167C558.292 264.38 514.675 220.778 460.874 220.778H427.02C440.731 241.79 448.696 266.867 448.696 293.819V345.607ZM54.3974 232.952C38.3266 232.932 26.6446 248.203 30.8714 263.703L59.0241 366.862C59.0241 380.307 69.9285 391.208 83.3792 391.208H290.391C309.14 391.21 320.857 370.921 311.483 354.688C307.133 347.155 299.094 342.515 290.391 342.515H222.857L197.869 250.896C194.979 240.299 185.353 232.949 174.368 232.952H54.3974ZM497.404 366.862C470.503 366.862 448.696 388.662 448.696 415.556V561.638C448.696 575.084 459.601 585.986 473.049 585.986H582.645C596.096 585.986 607 575.084 607 561.638V415.556C607 388.662 585.191 366.862 558.29 366.862H497.404Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2651_3999"
                  x="0"
                  y="0"
                  width="637"
                  height="620"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="15" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2651_3999"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2651_3999"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            {job.experience}
          </div>
          <div className={styles.infoItem}>
            <svg
              className={styles.icon}
              viewBox="0 0 560 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="560" height="560" fill="url(#pattern0_2651_4012)" />
              <defs>
                <pattern
                  id="pattern0_2651_4012"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1">
                  <use
                    xlink:href="#image0_2651_4012"
                    transform="scale(0.0208333)"
                  />
                </pattern>
                <image
                  id="image0_2651_4012"
                  width="48"
                  height="48"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA9dJREFUaAXtmS+oFUEUxr9gMBgMBoPBYDAYDAaDgtFoMBgMBsMLBoPBYHjBYDAICgoaBIvBYDAICgYFg4KCQUFBQcFgMBgMBr2/y87lY9idP7tzr1fwwLL77s7M+b4z59/sk8bLNkknJF2X9EjSK0mfJf2W9FXSG0lPJN2UdErSzvGq2s3c0oEB8K8OLIBLr+eSzkna2g5S+UrHJL2vAJsixQ6dloRBli67JWG5IUDfJD2UdHsG6KKkCzNEm93fD2ZAvyTmvpW0f5kMDnX+HIPHgoDlfYkVAQmxDz1kfkhid5sLgRf7+feZFqw71ochuzFgFAg2E8DHVn8saUcjDWQwXC7Wwa5OFtwitvy1QlepVX6+R9fJ2kV8PAGLf7tlzvqAzDO5nt3bkxnnr49HJIiJAz6g5jnONli+VPDvjx15QNQULozkRqMgVscZmcAXwedLMkwgyO75/CPhReH9VjSfglcsAPUiRbapDdipBMDgaRYM20sZUBXdeqTKWplKAH0EsOO4VAoCdwkTCeJq/5ulxRYEwPvasBBTWSEne9ocm4tbEYi9YV+OAS1xsD536sAYaUWA7OV4shX6hk2gMRsrrQig/6VholFMivt/dnBipZYEqD9hFz4ldM5fedDQn6SEeAFo34XrBaXca+uA6yULhrUoikkJx0AmpAL4qKSftnBQMHSfQiBuJpNZ0QHQXA3JvQrwrDmFAMZyXOz4oFDxwuBUAYutEub03cnfxVW0BxlzQ19FQCeFIAkgLidHSns7y2Ld1DUFfIDAGsRV0n0Y7Cnrfpj9L909ZU2pA3+Nc1y6aw4jDppDSMqtWr87GNr9uAClUqkD9mfmhDha5Z3MOJdnBoDorznIsID38askQBM6l9iN+PRRI57JVkkAXXMhVflhnmfahlJxAmxrX6vR6jeOmm6kBcZ4F+4s3uQfnECun8qvlh4RF9TFaPzeGztYln6jWQsCMOH04w0bQcJ3m5ysDQGAxq4ECbYtJWMIsOPsMA0kOktjbtCFHOCVKFBwp6uJvqSWAGBfdDpC8iB973IQA89FBJjbRwIlfZ/Cawl44QsEMNLdAdD+czEBJp2JvliE9BXXiVoC3kA6AVr7nFQRYDFa2neRS8Vday0BP4c7AdbJSTUBFiTgCDYsxEVj5lJLwEE4gZI+zOfiEVVCxe47YNQSQClgyXCBAAWwpAebRGCI7RgCrMUH5MOF2SfoXisCAVTN/T+BPmuNdaG+tXK/LX0HnnatB4qWccX/yckRLnrvOxCK3aruRQBzg+I2fFXgs99Nc8DDe/ojPsmsCjh6AL/xB4ELvDSBPTp9AAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            {job.employmentType}
          </div>
          <div className={styles.infoItem}>
            <svg
              className={styles.icon}
              viewBox="0 0 560 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="560" height="560" fill="url(#pattern0_2651_4017)" />
              <defs>
                <pattern
                  id="pattern0_2651_4017"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1">
                  <use
                    xlink:href="#image0_2651_4017"
                    transform="scale(0.0208333)"
                  />
                </pattern>
                <image
                  id="image0_2651_4017"
                  width="48"
                  height="48"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmxJREFUaAXtmr9uFDEQxr+CImUKyhQp8wgUFBSUPEIKGvoookQibwAFBQUSvEXo4AGQEimRko5IiZQiBQUFBQXcTzorI8seO7de3xUeydrVeuabb2Z8u/5z0jTZlvRW0pmkv4v7f5UNXWywBWMtsifpupKwFxgYYHWVx5JuG5APgYEFZlPZlbQv6Z2kz1H7EZG/lPRG0svKhi42IQCuYMZ+8A0HuFTLI0mvJf2JHFhn9v5U0lY1+r0iNtharNw9XOAEt6KgmANKPT8sIuYVsE1h5p7BzRVKFWf+ZjEsrkyLf7ivXES/E1tLFmzri3vbDzd3ODHerMGLjP9fRu9kwhDCNvi7y/h6YnTQhWNW3htlMp+Tj0YP0IuF4lHlD5gfOrrYBPJcP+ScLasSdOGYlS8GlPLlpPdr1A4lOGalNgAAen7IZgmAIJgGMBzOV5hKYINtzVRitgAIooeMAHpk2fMxKuBlp0ffqECPLHs+RgW87PToGxXokWXPx6iAl50efbNUgFnks0atNCNtHgAO47VxWDGtcv1ZmFY3D4DMr0LUs3nqjMXmAbCnE29ueeRKfWB5e0vNAwjJYoujRQt4uetsAeQctn4+Amid0YfijQqkMsYO27GkbxMbGGB50rwCbGqVXo0P7fdOaUYAqfJS9q+LudD3iQ2M7kMoFdCcz5oPoTnJprBHAKms9HxWXYFP5vWI0aaIDQCOWbEnlByolVZKWaCGHUyzf5vEHnjYz40iHyIO4TDgNbeOhm++9PajCEdXeK9bg026h1tRWKDEfwPYhCDgtFNkv1Rg3HF+xVIvPvjuGQy+4QCX5JLzPx6H5wWNSP5BAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            {job.roleCategory}
          </div>
          <div className={styles.infoItem}>
            <svg
              className={styles.icon}
              viewBox="0 0 577 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.5049 84.9243C138.609 30.5482 211.989 0 288.503 0C365.017 0 438.397 30.5482 492.501 84.9243C546.605 139.3 577 213.05 577 289.95C577 366.849 546.605 440.599 492.501 494.975L288.503 700L84.5049 494.975C57.7137 468.051 36.4616 436.088 21.9622 400.91C7.46279 365.731 0 328.027 0 289.95C0 251.872 7.46279 214.168 21.9622 178.989C36.4616 143.811 57.7137 111.848 84.5049 84.9243ZM288.503 372.788C310.363 372.788 331.328 364.06 346.785 348.525C362.243 332.99 370.927 311.92 370.927 289.95C370.927 267.979 362.243 246.909 346.785 231.374C331.328 215.839 310.363 207.111 288.503 207.111C266.643 207.111 245.678 215.839 230.221 231.374C214.763 246.909 206.08 267.979 206.08 289.95C206.08 311.92 214.763 332.99 230.221 348.525C245.678 364.06 266.643 372.788 288.503 372.788Z"
                fill="black"
              />
            </svg>
            {job.location}
          </div>
          <div className={styles.infoItem}>
            <svg
              className={styles.icon}
              viewBox="0 0 560 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="560" height="560" fill="url(#pattern0_2651_4028)" />
              <defs>
                <pattern
                  id="pattern0_2651_4028"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1">
                  <use
                    xlink:href="#image0_2651_4028"
                    transform="scale(0.0208333)"
                  />
                </pattern>
                <image
                  id="image0_2651_4028"
                  width="48"
                  height="48"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA9lJREFUaAXNmS+oFUEUxr9gMBgEDYIGo8FgNBgMBoPBIAhiMBgMBqPBYDAYDAabgoJBQcGgoKCgQVBQUHhBQUHBYFAwGAwGfT948/j2vLl7d2f/Hlh2792ZM9858805Z2alctkh6bqkH5L+dbg+STovaVM5lPY9t0v61gF0zuDb7WGU97jSM/hk0IFySO16vjUDViSdlnSq4Dor6Y/putAORnnr1zbou3I12iPpr+kazYCLNijTf7LQiFdBz/5CPa27bZX0ywYnkrSNItAncZ/73dYoOnZguh0AgJrKLkm/rT+hmMg2qmyW9N1A8LylIYKH1g8nEAAmEaKPzwJrY5kcC32eLesw5Ht4/9kAsS521gy4LWRuaLS7pv3gr/ZJemMGMBvQY5E8Cm1Z/OgYXVhwNwMYp9JTSWRVZoiL5+c17SkjWNijCBzuWsC5sekZ+g26mPH6vYwXyaS3JJ0IuSEBi3eAHl/r41k4tYOCVLq9CjzNVZ+UFM5haHA/lAcJGDUP75wqeyW9yDiFkNxbVoYynnQAxG8S16Lsy2wdkXRm7eK5LlGhyzM7Y2BwZ0pR4yQPpjuV6BChj5nJzca5Ui7h+chRuE4GHkqY0RsZp4GllcDrCJ5t31iC19OMcwdL4zWBF6jxXcHlsZDbONGID01nP9b6TOlUcq2tI4m/vsUjdFL7TyVUt1/MCKhUmyPguVOH8De1HAqYFla8cN+T1fupkdv4fohAksvmn2gpSWguQkJzZhzOAfPFyzpourvK6er7P3KPr81LuQGemJXUOHOTl4Yvu4vzeufq3NCvMsJPA8FaEQot51jnIqqivZ8fcR1UikOKMzeABT03iUGmUlCy5XMDDs4N/dq21DFWDoIB7C8r1s3EmMiSipOjAZWXMzGgFiPls89A6WHtkLbGRcx2dF1IFF7/ZxPFeutpHjyMgnVDOeH1BjXRnCTWadlEG0+bs/XGRFZRFTvFsx9C2FQ7jajDp9wLJF+RsLxKpiZauCeIG+oHOa4lzSPcoc7j4P3aMgePu7VMG+eclbQ9AnCGYEzGduqAbWmVzO7fCzsUQKejIwFnGMaKjgSTnwLWwiFpRCMwhNMKlG8IYbXamr1EJ7rjiQjjgqVSOjRRibUfwxSm6eQYkCNxEl6XsoO+6LiTOVpMY4GhkrSagE9tSHAkEN8NJcV+5z2e4/Sa7wYkQnZ4hDsunvmPd7Sh7TKdOIl+vZwEsrhRFg9g3Yi+nhPwQUI4EQCeEm77/MiBLnSiuxePrzq8kcBNDl6hCR+qOV3mo9/X1eP3n7Z+eOY/3tGGtvShbzG/QfgfAXUf6f9wWzwAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
            {job.salary}
          </div>
        </div>

        {/* Featured Opportunity */}
        <h3 className={styles.sectionTitleWrapper}>
          <span className={styles.sectionLine}></span>
          <span className={styles.sectionTitle}>Featured Opportunity</span>
          <span className={styles.sectionLine}></span>
        </h3>
        <div className={styles.featuredCards}>
          <div className={styles.card}>
            <div className={styles.cardCompanyDetails}>
              <img
                src={SampleImage}
                alt="Company Logo"
                className={styles.cardLogo}
              />
              <div className={styles.cardDetails}>
                <h4>Data Analytics</h4>
                <p>Company Name</p>
              </div>
            </div>
            <p>
              <FaMapMarkerAlt className={styles.icon} /> Kolkata
            </p>
            <p>
              <svg
                viewBox="0 0 277 246"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M77.1288 145.826C69.7252 148.479 58.6495 153.647 53.3649 158.34C42.8907 167.642 39.2659 179.836 38.0675 188.951C37.4569 193.596 37.4414 197.694 37.5774 200.641C37.6456 202.12 38.8631 210.511 38.9568 211.37C39.9236 211.453 49.3721 212.534 51.038 212.595C54.3561 212.715 58.9707 212.702 64.2004 212.16C74.4642 211.095 88.1947 207.876 98.6689 198.574C103.756 194.056 109.338 184.773 112.414 178.22C112.959 177.059 113.231 176.479 113.182 175.825C113.167 175.621 113.12 175.391 113.053 175.198C112.84 174.577 112.332 174.126 111.316 173.224L81.4532 146.703C80.6227 145.966 80.2075 145.597 79.688 145.438C79.5234 145.387 79.3351 145.351 79.1635 145.336C78.6219 145.291 78.1242 145.469 77.1288 145.826Z"
                  fill="black"
                  fill-opacity="0.58"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M220.519 33.3701C223.037 33.2953 232.559 33.6315 236.792 33.7896C237.65 33.8216 238.079 33.8376 238.388 34.0638C238.487 34.1368 238.577 34.2252 238.651 34.3243C238.88 34.6311 238.9 35.0604 238.941 35.9191V35.9193C239.123 39.7831 239.485 47.9484 239.402 50.14C239.184 55.934 238.487 64.0182 236.574 73.265C232.907 90.9825 224.651 113.541 206.088 132.269L202.104 200.244C201.948 202.905 201.87 204.236 201.15 205.158C200.916 205.456 200.639 205.718 200.328 205.933C199.365 206.599 198.032 206.599 195.366 206.599L133.794 206.599C131.102 206.599 129.756 206.599 128.789 205.924C128.477 205.706 128.199 205.441 127.966 205.139C127.246 204.206 127.181 202.862 127.052 200.173L125.308 163.891L92.4332 134.695L50.8381 133.118C48.123 133.015 46.7654 132.964 45.8212 132.245C45.5157 132.012 45.2478 131.734 45.0269 131.42C44.3438 130.449 44.3438 129.09 44.3438 126.373V73.2695C44.3438 70.573 44.3438 69.2247 45.0197 68.2572C45.2385 67.9442 45.5037 67.6664 45.8063 67.4334C46.7416 66.7135 48.0884 66.6512 50.7821 66.5267L128.04 62.9557C149.128 46.47 174.529 39.1379 194.48 35.8818C204.892 34.1824 213.995 33.564 220.519 33.3701ZM169 131.342C166.372 133.252 162.622 133.252 155.122 133.252H144.956C137.456 133.252 133.707 133.252 131.078 131.342C130.229 130.725 129.482 129.978 128.866 129.129C126.956 126.501 126.956 122.751 126.956 115.252V110.252C126.956 102.752 126.956 99.0024 128.866 96.3737C129.482 95.5248 130.229 94.7782 131.078 94.1614C133.707 92.2516 137.456 92.2516 144.956 92.2516H155.122C162.622 92.2516 166.372 92.2516 169 94.1614C169.849 94.7782 170.596 95.5248 171.213 96.3737C173.122 99.0024 173.122 102.752 173.122 110.252V115.252C173.122 122.751 173.122 126.501 171.213 129.129C170.596 129.978 169.849 130.725 169 131.342Z"
                  fill="black"
                  fill-opacity="0.79"
                />
              </svg>
              Remote
            </p>
            <button className={styles.applyButton}>Apply</button>
          </div>
          <div className={styles.card}>
            <div className={styles.cardCompanyDetails}>
              <img
                src={SampleImage}
                alt="Company Logo"
                className={styles.cardLogo}
              />
              <div className={styles.cardDetails}>
                <h4>Data Analytics</h4>
                <p>Company Name</p>
              </div>
            </div>
            <p>
              <FaMapMarkerAlt className={styles.icon} /> Kolkata
            </p>
            <p>
              <svg
                viewBox="0 0 277 246"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M77.1288 145.826C69.7252 148.479 58.6495 153.647 53.3649 158.34C42.8907 167.642 39.2659 179.836 38.0675 188.951C37.4569 193.596 37.4414 197.694 37.5774 200.641C37.6456 202.12 38.8631 210.511 38.9568 211.37C39.9236 211.453 49.3721 212.534 51.038 212.595C54.3561 212.715 58.9707 212.702 64.2004 212.16C74.4642 211.095 88.1947 207.876 98.6689 198.574C103.756 194.056 109.338 184.773 112.414 178.22C112.959 177.059 113.231 176.479 113.182 175.825C113.167 175.621 113.12 175.391 113.053 175.198C112.84 174.577 112.332 174.126 111.316 173.224L81.4532 146.703C80.6227 145.966 80.2075 145.597 79.688 145.438C79.5234 145.387 79.3351 145.351 79.1635 145.336C78.6219 145.291 78.1242 145.469 77.1288 145.826Z"
                  fill="black"
                  fill-opacity="0.58"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M220.519 33.3701C223.037 33.2953 232.559 33.6315 236.792 33.7896C237.65 33.8216 238.079 33.8376 238.388 34.0638C238.487 34.1368 238.577 34.2252 238.651 34.3243C238.88 34.6311 238.9 35.0604 238.941 35.9191V35.9193C239.123 39.7831 239.485 47.9484 239.402 50.14C239.184 55.934 238.487 64.0182 236.574 73.265C232.907 90.9825 224.651 113.541 206.088 132.269L202.104 200.244C201.948 202.905 201.87 204.236 201.15 205.158C200.916 205.456 200.639 205.718 200.328 205.933C199.365 206.599 198.032 206.599 195.366 206.599L133.794 206.599C131.102 206.599 129.756 206.599 128.789 205.924C128.477 205.706 128.199 205.441 127.966 205.139C127.246 204.206 127.181 202.862 127.052 200.173L125.308 163.891L92.4332 134.695L50.8381 133.118C48.123 133.015 46.7654 132.964 45.8212 132.245C45.5157 132.012 45.2478 131.734 45.0269 131.42C44.3438 130.449 44.3438 129.09 44.3438 126.373V73.2695C44.3438 70.573 44.3438 69.2247 45.0197 68.2572C45.2385 67.9442 45.5037 67.6664 45.8063 67.4334C46.7416 66.7135 48.0884 66.6512 50.7821 66.5267L128.04 62.9557C149.128 46.47 174.529 39.1379 194.48 35.8818C204.892 34.1824 213.995 33.564 220.519 33.3701ZM169 131.342C166.372 133.252 162.622 133.252 155.122 133.252H144.956C137.456 133.252 133.707 133.252 131.078 131.342C130.229 130.725 129.482 129.978 128.866 129.129C126.956 126.501 126.956 122.751 126.956 115.252V110.252C126.956 102.752 126.956 99.0024 128.866 96.3737C129.482 95.5248 130.229 94.7782 131.078 94.1614C133.707 92.2516 137.456 92.2516 144.956 92.2516H155.122C162.622 92.2516 166.372 92.2516 169 94.1614C169.849 94.7782 170.596 95.5248 171.213 96.3737C173.122 99.0024 173.122 102.752 173.122 110.252V115.252C173.122 122.751 173.122 126.501 171.213 129.129C170.596 129.978 169.849 130.725 169 131.342Z"
                  fill="black"
                  fill-opacity="0.79"
                />
              </svg>
              Remote
            </p>
            <button className={styles.applyButton}>Apply</button>
          </div>
        </div>

        {/* Feedback & Rating */}
        <h3 className={styles.sectionTitleWrapper}>
          <span className={styles.sectionLine}></span>
          <span className={styles.sectionTitle}>Feedback & Rating</span>
          <span className={styles.sectionLine}></span>
        </h3>
        <textarea
          placeholder="Write a feedback"
          className={styles.feedbackInput}></textarea>
        <button className={styles.submitButton}>Submit</button>
        <div className={styles.ratingSection}>
          <h3 className={styles.sectionTitleWrapper}>
            <span className={styles.sectionLine}></span>
            <span className={styles.sectionTitle}>Rate this Job</span>
            <span className={styles.sectionLine}></span>
          </h3>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={styles.star}
                viewBox="0 0 264 217"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M132 0L162.983 82.5725H263.246L182.131 133.605L213.114 216.178L132 165.145L50.8856 216.178L81.8686 133.605L0.754196 82.5725H101.017L132 0Z"
                  fill="#D9D9D9"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
      {applyJobStep === 1 && (
        <ApplyJob1
          formData={formData}
          updateFormData={updateFormData}
          onNext={nextApplyJobStep}
          onClose={closeApplyJobPopup}
        />
      )}
      {applyJobStep === 2 && (
        <ApplyJob2
          formData={formData}
          updateFormData={updateFormData}
          onNext={nextApplyJobStep}
          onBack={prevApplyJobStep}
          onClose={closeApplyJobPopup}
        />
      )}
      {applyJobStep === 3 && (
        <ApplyJob3
          formData={formData}
          onSubmit={handleSubmit}
          onBack={prevApplyJobStep}
          onClose={closeApplyJobPopup}
        />
      )}
    </>
  );
};

export default WorkDescription;
