# Yendou Counter App

This is a simple counter application built with TypeScript, React, and Chakra UI.

## Getting Started

Follow these steps to set up and run the project.

### 1. Clone the Repository:
```bash
   git clone https://github.com/PrincepaulIzuogu/yendou-counter.git
   cd yendou-counter

### 2. Install Dependencies:
   Ensure you have Node.js installed. Then, run:
```bash
   npm install

### 3. Start the Development Server:
   To run the application in development mode:
```bash
   npm run dev
   or
   npm start

#### 4. Open in Browser:
   Open your browser and go to:
   http://localhost:3000

## Project Features

- A global CounterProvider for state management.
- A "+1" button that increments the counter.
- Toast notifications, limited to a maximum of 2 at a time.
- Responsive UI styling based on Figma.
- Implemented in TypeScript.

## Project Structure

- `src/components/Counter.tsx`: The Counter component.
- `src/context/CounterContext.tsx`: Handles global state management.
- `src/styles/CounterStyles.css`: Styles for centering the counter.
- `src/styles/ToastStyles.css`: Styles for the toast notification.
- `App.tsx`: The main application file.
- `index.tsx`: The entry point of the React app.
- `package.json`: Lists dependencies and scripts.
- `README.md`: Documentation for the project.
- `.gitignore`: Ensures unnecessary files are not pushed to GitHub.


## Built With

- React + TypeScript
- Chakra UI
- Context API for global state management

