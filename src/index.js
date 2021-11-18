import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Desc from './components/Desc';
import Services from './components/Services';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <Flex
        flexDir="column"
        bg="black"
        color="white"
        p="2rem"
        gridGap="5rem"
        overflowX="hidden"
      >
        <Navbar />
        <Jumbotron />
        <Desc />
        <Services />
      </Flex>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
