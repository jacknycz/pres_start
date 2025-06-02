export const componentDocs = `
Component: Button
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

Component: Badge
Description: Small status descriptors for UI elements.
Props:
- variant: "default" | "outline" | "subtle" - Visual style variant
- color: "gray" | "red" | "green" | "blue" | "yellow" - Color variant
- size: "sm" | "md" - Size variant
Usage:
<Badge color="green">Active</Badge>

Component: Modal
Description: A dialog that appears on top of the main content.
Props:
- isOpen: boolean - Controls visibility
- onClose: () => void - Callback when modal is closed
- title: string - Modal title
- size: "sm" | "md" | "lg" | "xl" - Modal size
- closeOnOverlayClick: boolean - Close when clicking outside
Usage:
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Title">
  Content goes here
</Modal>

Component: Input
Description: Form input field.
Props:
- type: string - Input type (text, email, password, etc.)
- placeholder: string - Placeholder text
- disabled: boolean - Disables the input
- error: string - Error message to display
- fullWidth: boolean - Makes input take full width
- label: string - Label text
Usage:
<Input type="text" placeholder="Enter your name" label="Name" />

Component: Select
Description: Dropdown select input.
Props:
- options: Array<{value: string, label: string}>
- value: string - Currently selected value
- onChange: (value: string) => void
- placeholder: string - Placeholder text
- disabled: boolean - Disables the select
- label: string - Label text
Usage:
<Select 
  options={[
    {value: '1', label: 'Option 1'},
    {value: '2', label: 'Option 2'}
  ]} 
  placeholder="Select an option"
  label="Choose an option"
/>

Component: Checkbox
Description: A checkbox input for forms.
Props:
- checked: boolean - Checked state
- onChange: (checked: boolean) => void - Change handler
- label: string - Label text
- disabled: boolean - Disables the checkbox
- size: "sm" | "md" - Size variant
Usage:
<Checkbox 
  label="I agree to the terms" 
  checked={agreed} 
  onChange={setAgreed} 
/>

Component: RadioGroup
Description: A group of radio buttons.
Props:
- options: Array<{value: string, label: string}>
- value: string - Selected value
- onChange: (value: string) => void - Change handler
- label: string - Group label
- disabled: boolean - Disables all radios
- name: string - Name attribute for the group
Usage:
<RadioGroup
  name="size"
  label="Select size"
  options={[
    { value: 's', label: 'Small' },
    { value: 'm', label: 'Medium' },
    { value: 'l', label: 'Large' }
  ]}
  value={size}
  onChange={setSize}
/>

Component: ToggleSwitch
Description: A toggle switch component.
Props:
- checked: boolean - Checked state
- onChange: (checked: boolean) => void - Change handler
- label: string - Label text
- disabled: boolean - Disables the toggle
- size: "sm" | "md" - Size variant
Usage:
<ToggleSwitch 
  label="Enable notifications" 
  checked={enabled} 
  onChange={setEnabled} 
/>

Component: RangeSlider
Description: A slider for selecting a value within a range.
Props:
- min: number - Minimum value
- max: number - Maximum value
- value: number - Current value
- onChange: (value: number) => void - Change handler
- step: number - Step size
- disabled: boolean - Disables the slider
- label: string - Label text
Usage:
<RangeSlider 
  min={0} 
  max={100} 
  value={volume} 
  onChange={setVolume}
  label="Volume"
/>

Component: Progress
Description: Displays progress of an operation.
Props:
- value: number - Current progress (0-100)
- size: "sm" | "md" | "lg" - Size variant
- color: string - Progress bar color
- showLabel: boolean - Show percentage label
- labelPosition: "inside" | "outside" - Label position
Usage:
<Progress value={75} size="md" showLabel />

Component: Spinner
Description: Animated loading spinner.
Props:
- size: "sm" | "md" | "lg" - Size variant
- color: string - Spinner color
- className: string - Additional classes
Usage:
<Spinner size="md" />

Component: Avatar
Description: Displays a user's avatar with fallback to initials.
Props:
- src: string - Image source URL
- alt: string - Alt text
- name: string - User's name for fallback initials
- size: "xs" | "sm" | "md" | "lg" | "xl" - Size variant
- shape: "circle" | "square" - Avatar shape
Usage:
<Avatar 
  src="/user.jpg" 
  name="John Doe" 
  size="md" 
  shape="circle"
/>

Component: Tooltip
Description: Displays additional information on hover/focus.
Props:
- content: ReactNode - Tooltip content
- children: ReactNode - Element that triggers the tooltip
- position: "top" | "right" | "bottom" | "left" - Tooltip position
- delay: number - Delay before showing (ms)
Usage:
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>

Component: Toast
Description: Displays brief, temporary notifications.
Props:
- message: string - Message to display
- type: "success" | "error" | "warning" | "info" - Toast type
- duration: number - Duration in ms (0 = persistent)
- onClose: () => void - Callback when toast is closed
Usage:
<Toast 
  message="Changes saved successfully!" 
  type="success" 
  duration={3000}
  onClose={handleClose}
/>

Component: Tag
Description: Small label for categorization and keywords.
Props:
- children: ReactNode - Tag content
- color: string - Background color
- variant: "solid" | "outline" - Visual style
- size: "sm" | "md" - Size variant
- onClose: () => void - Callback for close button
Usage:
<Tag color="blue" variant="solid">New</Tag>

Component: Accordion
Description: Expandable/collapsible content sections.
Props:
- items: Array<{title: string, content: ReactNode}>
- allowMultiple: boolean - Allow multiple items open
- defaultOpen: number | number[] - Initially open items
- size: "sm" | "md" - Size variant
Usage:
<Accordion
  items={[
    { title: 'Section 1', content: 'Content 1' },
    { title: 'Section 2', content: 'Content 2' }
  ]}
  allowMultiple
/>

Component: Tabs
Description: Tabbed interface for content organization.
Props:
- items: Array<{label: string, content: ReactNode}>
- defaultActive: number - Default active tab index
- variant: "default" | "pills" - Visual style
- fullWidth: boolean - Tabs take full width
Usage:
<Tabs
  items={[
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' }
  ]}
  variant="pills"
/>

Component: Menu
Description: Dropdown menu component.
Props:
- trigger: ReactNode - Element that triggers the menu
- items: Array<{label: string, onClick: () => void, icon?: ReactNode}>
- position: "left" | "right" - Menu position
- size: "sm" | "md" - Size variant
Usage:
<Menu
  trigger={<Button>Open Menu</Button>}
  items={[
    { label: 'Edit', onClick: handleEdit },
    { label: 'Delete', onClick: handleDelete }
  ]}
  position="right"
/>

Component: IconButton
Description: Button that displays only an icon.
Props:
- icon: ReactNode - Icon component
- size: "sm" | "md" | "lg" - Size variant
- variant: "ghost" | "outline" | "solid" - Visual style
- aria-label: string - Accessible label
- disabled: boolean - Disables the button
Usage:
<IconButton 
  icon={<SearchIcon />} 
  aria-label="Search" 
  variant="ghost"
/>

Component: Link
Description: Navigation link component.
Props:
- to: string - URL to navigate to
- children: ReactNode - Link content
- variant: "default" | "primary" | "secondary" - Visual style
- isExternal: boolean - Open in new tab
- className: string - Additional classes
Usage:
<Link to="/about" variant="primary">About Us</Link>

Component: Heading
Description: Semantic heading component.
Props:
- level: 1 | 2 | 3 | 4 | 5 | 6 - Heading level (h1-h6)
- children: ReactNode - Heading text
- className: string - Additional classes
Usage:
<Heading level={1}>Page Title</Heading>
`;
