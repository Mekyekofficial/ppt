import { useState } from 'react';

const FloatingChatboxFrame = () => {
  const [isMinimized, setIsMinimized] = useState(true);

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      right: '0',
      zIndex: 1000000,
      cursor: 'pointer !important',
      backgroundColor: 'white',
    }}>
      <iframe
          src="http://localhost:8000"
          style={{
            border: 'none',
            boxShadow: 'none',
            width: isMinimized ? '10vw' : '100vw',
            height: isMinimized ? '10vh' : '100vh',
          }}
        />
    </div>
  );
};

export default FloatingChatboxFrame; 