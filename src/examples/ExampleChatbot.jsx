import React, { useState } from 'react';
import Chatbot from '../components/Chatbot/Chatbot';
import Button from '../components/Button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Mock function to simulate API call
const mockSendMessage = async (message) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simple echo response for demo
  return `You said: ${message}`;
};

const initialMessages = [
  {
    id: 1,
    text: 'Hello! How can I help you today?',
    isBot: true,
    timestamp: new Date()
  }
];

const ExampleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);

  const handleClose = () => {
    setIsChatOpen(false);
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const generateChatbotCode = () => {
    return `import { useState } from 'react';
import Chatbot from './components/Chatbot/Chatbot';

const MyChatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  
  const handleSendMessage = async (message) => {
    // Call your API here
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    return data.reply;
  };

  return (
    <div className="max-w-md mx-auto">
      {isChatOpen ? (
        <Chatbot
          title="Support Bot"
          placeholder="Type your message..."
          onSendMessage={handleSendMessage}
          onClose={() => setIsChatOpen(false)}
          initialMessages={[
            {
              id: 1,
              text: 'Hello! How can I help you today?',
              isBot: true,
              timestamp: new Date()
            }
          ]}
        />
      ) : (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="px-4 py-2 bg-p-500 text-white rounded-lg"
        >
          Open Chat
        </button>
      )}
    </div>
  );
};`
  };

  return (
    <>
      <div className="component-header">
        <h2 className="text-4xl">Chatbot</h2>
      </div>

      <div className="component-wrapper">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
        >
          {isOpen ? 'Hide Chatbot' : 'Show Chatbot'}
        </Button>

        <div className={`transition-all duration-300 mt-4 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          {isChatOpen ? (
            <Chatbot
              title="Presbot"
              placeholder="Type your message here..."
              onSendMessage={mockSendMessage}
              onClose={handleClose}
              initialMessages={initialMessages}
              className="shadow-xl"
            />
          ) : (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <p className="text-gray-600 dark:text-gray-300 mb-4">Chat is currently closed</p>
              <Button onClick={handleOpenChat}>
                Reopen Chat
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="component-code">
        <h3 className="text-2xl mb-4">Implementation</h3>
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {generateChatbotCode()}
        </SyntaxHighlighter>
      </div>

      <div className="props-wrapper">
        <h3 className='text-2xl mb-6'>Props</h3>
        <table className="w-full border rounded-lg table-auto props">
          <thead className="props-header">
            <tr>
              <th className="props-cell">Name</th>
              <th className="props-cell">Details</th>
              <th className="props-cell">Default</th>
            </tr>
          </thead>

          <tbody>
            <tr className="props-row">
              <td className="props-cell"><code className="label-style">title</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>The title displayed in the chat header</span>
              </td>
              <td className="props-cell"><code className="label-style">'Chatbot'</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">placeholder</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>Placeholder text for the message input</span>
              </td>
              <td className="props-cell"><code className="label-style">'Type a message...'</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">onSendMessage</code></td>
              <td className="props-cell props-details">
                <code className="label-style">(message: string) =&gt; Promise&lt;string&gt;</code>
                <span>Callback function that handles sending messages. Should return a Promise that resolves to the bot's response.</span>
              </td>
              <td className="props-cell"><code className="label-style">() =&gt; Promise.resolve()</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">onClose</code></td>
              <td className="props-cell props-details">
                <code className="label-style">() =&gt; void</code>
                <span>Callback function called when the close button is clicked</span>
              </td>
              <td className="props-cell"><code className="label-style">() =&gt; {}</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">initialMessages</code></td>
              <td className="props-cell props-details">
                <code className="label-style">Array&lt;Message&gt;</code>
                <div className="mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded text-xs">
                  <pre className="whitespace-pre-wrap">
                    {`{
  id: string | number,
  text: string,
  isBot: boolean,
  timestamp?: Date
}`}
                  </pre>
                </div>
              </td>
              <td className="props-cell"><code className="label-style">[]</code></td>
            </tr>

            <tr className="props-row">
              <td className="props-cell"><code className="label-style">className</code></td>
              <td className="props-cell props-details">
                <code className="label-style">string</code>
                <span>Additional CSS classes for the chat container</span>
              </td>
              <td className="props-cell"><code className="label-style">''</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExampleChatbot;
