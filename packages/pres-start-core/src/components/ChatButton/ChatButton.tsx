import React, { useState, useRef, useEffect } from 'react';
import { ChatBubbleOutline, Close } from '@mui/icons-material';
import Chatbot from '../Chatbot/Chatbot';
import { motion, AnimatePresence } from 'framer-motion';
import { chatEndpoint } from '../../utils/api';

// Determine if we're running locally or on Netlify
const isLocal = window.location.hostname === 'localhost';
const apiEndpoint = isLocal ? chatEndpoint : '/.netlify/functions/chat';

const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  // Close chat when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatRef.current && event.target && event.target instanceof Node && !(chatRef.current as HTMLDivElement).contains(event.target)) {
        // Check if the click is not on the chat button
        const chatButton = document.querySelector('.chat-button');
        if (chatButton && event.target instanceof Node && !chatButton.contains(event.target)) {
          setIsOpen(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 

  const toggleChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (message: string) => {
    try {
      console.log('Sending message to:', apiEndpoint);
      console.log('Message content:', message);
      
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API error response:', errorData);
        throw new Error(`Failed to get response from chat service. Status: ${response.status}. Error: ${errorData.error || 'Unknown error'}`);
      }

      const data = await response.json();
      console.log('Successful response:', data);
      // Use only the assistant's reply from the server
      return data.response || "I'm sorry, I couldn't process your request.";
    } catch (error: unknown) {
      console.error('Error sending message:', error);
      if (error instanceof Error) {
        return `I'm having trouble connecting to the chat service. Error: ${error.message}`;
      }
      return `I'm having trouble connecting to the chat service. Unknown error.`;
    }
  };

  return (
    <div className="fixed bottom-6 left-24 z-40 flex items-end" ref={chatRef} style={{ height: 'fit-content' }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-16 left-0 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex-shrink-0"
          >
            <Chatbot
              title="PresBot"
              placeholder="Type your message..."
              onSendMessage={handleSendMessage}
              onClose={() => setIsOpen(false)}
              className="h-[500px]"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        className="chat-button w-14 h-14 rounded-full bg-p-500 text-white flex items-center justify-center shadow-lg hover:bg-p-600 transition-colors focus:outline-none"
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <Close className="w-6 h-6" />
        ) : (
          <ChatBubbleOutline className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatButton;
