import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { CounterProvider } from './context/CounterContext';
import Counter from './components/Counter';

function App() {
  return (
    <ChakraProvider>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </ChakraProvider>
  );
}

export default App;
