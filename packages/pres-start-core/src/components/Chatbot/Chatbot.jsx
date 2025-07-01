import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Send, SmartToy } from '@mui/icons-material';
import TextArea from '../Input/TextArea.jsx';
import Button from '../Button/Button.jsx';
import IconButton from '../IconButton/IconButton.jsx';
import { Spinner } from '../Spinner/Spinner.jsx';

const Message = ({ message, isBot, timestamp }) => {
  return (
    <div
      className={classNames(
        'flex mb-4 last:mb-0',
        isBot ? 'justify-start' : 'justify-end'
      )}
    >
      <div
        className={classNames(
          'max-w-[80%] rounded-2xl px-4 py-2',
          isBot
            ? 'bg-gray-100 dark:bg-gray-700 rounded-tl-none'
            : 'bg-p-500 text-white rounded-tr-none',
          'relative'
        )}
      >
        {isBot && (
          <div className="absolute -left-2 top-0 w-4 h-4 overflow-hidden">
            <div className="absolute bg-gray-100 dark:bg-gray-700 w-4 h-4 rotate-45 transform origin-bottom-right" />
          </div>
        )}
        {!isBot && (
          <div className="absolute -right-2 top-0 w-4 h-4 overflow-hidden">
            <div className="absolute bg-p-500 w-4 h-4 -rotate-45 transform origin-bottom-left" />
          </div>
        )}
        <div className="whitespace-pre-wrap break-words text-sm">{message}</div>
        {timestamp && (
          <div
            className={classNames(
              'text-xs mt-1 text-right',
              isBot ? 'text-gray-500 dark:text-gray-400' : 'text-p-100'
            )}
          >
            {new Date(timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 p-3 bg-gray-100 dark:bg-gray-800 rounded-full w-16">
    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
  </div>
);

const Chatbot = ({
  title = 'Chatbot',
  placeholder = 'Type a message...',
  onSendMessage = async () => {},
  initialMessages = [],
  className,
  ...props
}) => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const botResponse = await onSendMessage(inputValue);
      
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: botResponse || 'I received your message!',
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: 'Sorry, I encountered an error. Please try again.',
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div
      className={classNames(
        'flex flex-col h-[600px] max-h-[80vh] bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden',
        className
      )}
      {...props}
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center bg-white dark:bg-gray-900">
        <div className="w-8 h-8 rounded-full bg-p-500 text-white flex items-center justify-center mr-3">
          <SmartToy className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            <p>Start a conversation with {title}</p>
          </div>
        ) : (
          messages.map((message) => (
            <Message
              key={message.id}
              message={message.text}
              isBot={message.isBot}
              timestamp={message.timestamp}
            />
          ))
        )}
        {isTyping && (
          <div className="flex items-center">
            <TypingIndicator />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
      >
        <div className="flex items-end space-x-2">
          <TextArea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              rows={1}
              className="resize-none"
              // style={{ minHeight: '48px', maxHeight: '150px' }}
            />
          <IconButton
            type="submit"
            variant="primary"
            size="medium"
            className="flex-shrink-0"
            disabled={!inputValue.trim() || isTyping}
            icon={isTyping ? <Spinner size="small" className="text-white" /> : <Send className="w-5 h-5" />}
            aria-label="Send message"
          />
        </div>
      </form>
    </div>
  );
};

export default Chatbot; 