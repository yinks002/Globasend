'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  colors: {
    brand: {
      500: '#007AFF', 
      600: '#005ecb',
    },
  },
});

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}