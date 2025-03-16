import { useState } from "react";

const Interviews = () => {
  return (
    <div
      style={{
        height: '100vh',
        marginTop: "5vh",
        padding: '1vh 1vw',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <iframe
        src="http://localhost:9000/admin"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default Interviews;
