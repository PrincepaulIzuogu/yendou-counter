import { Button, useToast, ToastId } from '@chakra-ui/react'; // Import ToastId type
import { CheckIcon } from '@chakra-ui/icons';
import '@fontsource/inter';
import { useCounter } from '../context/CounterContext';
import '../styles/ToastStyles.css';
import '../styles/CounterStyles.css';
import { useRef } from 'react';

const Counter = () => {
  const { count, increment } = useCounter();
  const toast = useToast();
  const activeToasts = useRef<ToastId[]>([]); // Store active toast IDs (string or number)

  const handleClick = () => {
    increment();

    // Close the oldest toast if there are already 2 active
    if (activeToasts.current.length >= 2) {
      const oldestToastId = activeToasts.current.shift(); // Remove oldest
      if (oldestToastId) toast.close(oldestToastId); // Close the toast
    }

    // Create new toast and store its ID
    const newToastId: ToastId = toast({
      position: 'bottom',
      duration: 3000,
      isClosable: true,
      render: () => (
        <div className="toast-container">
          <div className="toast-icon">
            <CheckIcon />
          </div>
          <div className="toast-text">
            <span className="toast-title">Incremented</span>
            <span className="toast-description">
              Counter is now {count + 1}
            </span>
          </div>
        </div>
      ),
    });

    if (newToastId) {
      activeToasts.current.push(newToastId); // Store new toast ID
    }
  };

  return (
    <div className="counter-container"> {/* Centering wrapper */}
      <div className="counter-content">
        <h1 className="counter-value">Counter Value: {count}</h1>
        <Button colorScheme="teal" onClick={handleClick} className="counter-button">
          +1
        </Button>
      </div>
    </div>
  );
};

export default Counter;
