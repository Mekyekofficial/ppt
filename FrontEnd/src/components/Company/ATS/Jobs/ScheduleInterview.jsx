import { useState } from "react";

const ScheduleInterview = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: 1000000000,
        width: "80vw",
        height: "100vh",
      }}>
      <iframe
        src="http://localhost:9000/interview"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
      <div onClick={onClose} style={{position: 'fixed', top: '2.5vh', right: '3.5vw', cursor: 'pointer'}}>X</div>
    </div>
  );
};

export default ScheduleInterview;
