import React from 'react';
import { Flex, Heading, Text, Image } from '@chakra-ui/react';

const Hikery = () => {
  return (
    <Flex flexDir="column" gridGap="5rem">
      <Flex flexDir="column" gridGap="2rem" alignItems="center">
        <Heading>Why Trust Hikery?</Heading>
        <Text textAlign="center">
          Hikery is growing technology company that focuses on safety and
          comfort of hiking. Since 2020, Hikery received funding from the
          Ministry of Research, Technology and Higher Education of the Republic
          of Indonesia and the Greater Hub SBM ITB.
        </Text>
      </Flex>
      <Image src="assets/img/desc.png" />
      <Flex flexDir="column" gridGap="2rem" alignItems="center">
        <Heading>Our Services</Heading>
        <Text textAlign="center">
          There are many things you need to prepare before hiking, from gearing
          up, completing all the logistics, and getting your permit. Today,
          Hikery is ready to provide solutions to all of these problems.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Hikery;
