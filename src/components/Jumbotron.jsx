import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const Jumbotron = () => {
  return (
    <Flex w="100%" h="100vh">
      <Flex
        w="100%"
        bgImg="url('/assets/img/jumbotron landing.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
        pb="2em"
        pr={{ base: '1em', md: '4em' }}
        direction="column"
        justifyContent="flex-end"
        alignItems="flex-end"
        color="white"
      >
        <Heading
          textAlign="right"
          fontSize={{ base: '5xl', md: '7xl' }}
          maxW={{ base: '80vw', md: '45vw' }}
        >
          "EACH <span style={{ color: '#FFCA4A' }}>HIKE</span> HAS ITS OWN{' '}
          <span style={{ color: '#FFCA4A' }}>HISTORY</span>"
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Jumbotron;
