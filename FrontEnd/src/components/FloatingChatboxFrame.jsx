import { useState } from 'react';

const FloatingChatboxFrame = () => {
  const [isMinimized, setIsMinimized] = useState(true);

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: 1000000,
        width: isMinimized ? '10vw' : '100vw',
        height: isMinimized ? '10vh' : '100vh',
      }}
      onMouseEnter={() => setIsMinimized(false)}
      onMouseLeave={() => setIsMinimized(true)}
    >
      <iframe
        src="http://localhost:8000"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
};

export default FloatingChatboxFrame;
