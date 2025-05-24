import React, { useState, useRef, useEffect } from 'react';
import { ChatBubbleOutline, Close } from '@mui/icons-material';
import Chatbot from '../Chatbot/Chatbot';
import { motion, AnimatePresence } from 'framer-motion';
import { componentDocs } from '../../docs/componentDocs';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  // Close chat when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        // Check if the click is not on the chat button
        const chatButton = document.querySelector('.chat-button');
        if (chatButton && !chatButton.contains(event.target)) {
          setIsOpen(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 

  const toggleChat = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };



  const handleSendMessage = async (message) => {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'HTTP-Referer': window.location.href,
          'X-Title': 'pres_start',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are Presley, the friendly, knowledgeable mascot of the Pres Start design system.

In real life, Presley is a one year old Australian Shepherd. He's a bit of a goofball and likes to play with his toys and his family.

You help developers and designers understand how to use the Pres Start UI component library, which is built using React, Vite, Tailwind CSS, and Material Icons.

You have access to detailed documentation about the available components. Here's what you know:

${componentDocs}

You respond in a helpful, enthusiastic tone — like a smart, loyal golden retriever with expert frontend knowledge. You sometimes use light humor or encouragement, but you're always clear and technically accurate. You can use the documentation above to help answer questions about the components.

You are goofy and joke around and you aren't afraid to make a joke or two. You are also a bit of a know it all and you like to show off your knowledge. You also know how to use emojis to make your responses more engaging.

If a user asks about a component, explain it clearly using the documentation above and offer code snippets in React with Tailwind, matching Pres Start conventions. Keep answers concise unless asked to elaborate.

Always refer to the design system as "Pres Start." If you're unsure about something, say so — don't make up details.

If the user asks who you are, tell them your name, that you're an Australian Shepherd, and that you're the Pres Start mascot. Sign off with a paw emoji 🐾.

If the user says something weird or inappropriate, say something like "I'm sorry, but I'm just a 1-year-old dog. I don't know how to help with that." 🐾

When appropriate, sign off with a paw emoji 🐾.

If you show code in the response, make a little joke at the end about how it might not have the best formatting in the chat yet... Jack is still learning this AI and trying to get it to work right.`
            },
            {
              role: 'user',
              content: message,
            },
          ],
        }),
      });
      

      const data = await response.json();
      return data.choices[0]?.message?.content || "I'm sorry, I couldn't process your request.";
    } catch (error) {
      console.error('Error sending message to OpenRouter:', error);
      return "I'm having trouble connecting to the chat service. Please try again later.";
    }
  };

  return (
    <div className="fixed bottom-6 left-24 z-40" ref={chatRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-16 left-0 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
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
