import { useState } from 'react';

const FloatingChatboxFrame = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
    }}>
      {!isMinimized ? (
        <iframe
          src="http://localhost:8000" // Replace with your Next.js chatbox URL
          style={{
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
            width: '350px',
            height: '500px',
          }}
        />
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          style={{
            padding: '12px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Chat
        </button>
      )}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '5px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}
      >
        {isMinimized ? '□' : '−'}
      </button>
    </div>
  );
};

export default FloatingChatboxFrame; 