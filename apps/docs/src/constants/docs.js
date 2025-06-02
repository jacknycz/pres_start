export const componentDocs = `Component: Button
Description: A versatile button component for actions in forms, dialogs, and more.
Props:
- variant: "primary" | "secondary" | "ghost" | "destructive" - Button style variant
- size: "sm" | "md" | "lg" - Button size
- disabled: boolean - Disables the button
- iconLeft: ReactNode - Icon to display on the left
- iconRight: ReactNode - Icon to display on the right
- rounded: "default" | "sm" | "pill" | "square" - Border radius style
Usage:
<Button variant="primary" size="md">Click me</Button>

Component: ButtonGroup
Description: Groups buttons together with consistent spacing and styling.
Props:
- children: ReactNode - Button elements to group
- variant: "default" | "outline" - Visual style variant
- size: "sm" | "md" | "lg" - Size of buttons in group
Usage:
<ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>

Component: ChatButton
Description: A floating chat button that opens the chat interface.
Props:
- isOpen: boolean - Controls the visibility of the chat interface
- toggleChat: function - Function to toggle chat visibility
- handleSendMessage: function - Function to handle sending messages
Usage:
<ChatButton isOpen={isOpen} toggleChat={toggleChat} handleSendMessage={handleSendMessage} />

Component: Chatbot
Description: A chat interface component for displaying messages and handling user input.
Props:
- isOpen: boolean - Controls the visibility of the chat interface
- toggleChat: function - Function to toggle chat visibility
- handleSendMessage: function - Function to handle sending messages
- messages: array - Array of message objects
Usage:
<Chatbot isOpen={isOpen} toggleChat={toggleChat} handleSendMessage={handleSendMessage} messages={messages} />`;
