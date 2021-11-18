import React from 'react';
import { Flex, Heading, Text, Image, Button, Box } from '@chakra-ui/react';

const Services = () => {
  return (
    <Flex
      flexDir={{ base: 'column', md: 'row' }}
      gridGap="2rem"
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDir="column" gridGap="2rem" maxW={{ base: '100%', md: '40vw' }}>
        <Image src="assets/img/gear.png" />
        <Heading>Get Your Gear</Heading>
        <Text>
          Get your gear done without the hassle of finding the right rental or
          worrying about running out of items.
        </Text>
        <Box>
          <Button
            bg="black"
            border="1px solid white"
            borderRadius="6px"
            _hover={{ color: 'black', bg: 'white' }}
          >
            GEAR UP
          </Button>
        </Box>
      </Flex>
      <Flex flexDir="column" gridGap="2rem" maxW={{ base: '100%', md: '40vw' }}>
        <Image src="assets/img/hike.png" />
        <Heading>Live Your Dreams</Heading>
        <Text>
          Offering first-class guided open trip for hikers of all
          abilities--from beginners to experienced hikers looking to jump
          straight into the more demanding of the peaks.
        </Text>
        <Box>
          <Button
            bg="black"
            border="1px solid white"
            borderRadius="6px"
            _hover={{ color: 'black', bg: 'white' }}
          >
            GO HIKE
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Services;
