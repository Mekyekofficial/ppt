import React, { useState, useRef, useEffect } from 'react';
import { BsFillChatFill } from 'react-icons/bs';
import './ChatWidget.css';
import Chat from './chat';

const ChatWidget: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle the chat widget visibility when clicking the chat icon
  const toggleVisible = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible((prev) => !prev);
  };

  // Handle "Back" button click to close the chat
  const handleBackClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
  };

  return (
    <div ref={widgetRef} className="chat-widget">
      {/* Display the chat icon only if the chat is not visible */}
      {!visible && (
        <button className="chat-icon" onClick={toggleVisible}>
          <BsFillChatFill size={30} />
        </button>
      )}

      {/* Display the chat modal when visible */}
      {visible && (
        <div className="modal-window" onClick={(e) => e.stopPropagation()}>
          <button className="back-button" onClick={handleBackClick}>
            Back
          </button>
          <Chat />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
