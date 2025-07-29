# Contact Section

This directory contains the modularized contact section of the portfolio, following SOLID principles and featuring enhanced UI/UX with Framer Motion animations.

## Components Structure

```
5-contact/
├── components/
│   ├── ContactForm/       # Form component with validation
│   ├── ContactInfo/       # Contact information cards
│   ├── SendButton/        # Animated submit button
│   ├── Alert/             # Notification component
│   └── shared/            # Reusable form elements
│       ├── Input.jsx
│       └── Textarea.jsx
├── context/               # Context for state management
│   └── ContactContext.js
├── __tests__/             # Test files
│   └── SendButton.test.jsx
├── contact_Page.scss      # Main styles
└── index.js               # Main export
```

## Features

- **Modular Architecture**: Components are split by responsibility
- **Form Validation**: Client-side validation for better UX
- **Animations**: Smooth transitions and feedback with Framer Motion
- **Responsive Design**: Works on all screen sizes
- **Accessible**: Follows accessibility best practices

## Usage

Import the contact section in your main application:

```jsx
import ContactSection from './sections/5-contact';

function App() {
  return (
    <div className="app">
      <ContactSection />
    </div>
  );
}
```

## Dependencies

- React
- Framer Motion
- React Icons (for icons)
- Styled Components (for styling)
