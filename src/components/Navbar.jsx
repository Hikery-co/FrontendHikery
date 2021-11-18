import React, { useState } from 'react';
import { Flex, Text, Heading, Box, Spacer } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex
      as="nav"
      align="center"
      justify={{ base: 'flex-start', md: 'center' }}
      wrap="wrap"
      w="100%"
      p="0.75em"
    >
      <Box
        display={{ base: 'block', md: 'none' }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <CloseIcon color="white" w={4} h={4} />
        ) : (
          <GiHamburgerMenu color="white" size={24} />
        )}
      </Box>
      <Spacer display={{ base: 'block', md: 'none' }} />
      <Heading
        textAlign="center"
        display={{ base: menuOpen ? 'none' : 'block', md: 'none' }}
        fontSize="1em"
        cursor="default"
      >
        HIKERY
      </Heading>
      <Box
        display={{ base: menuOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          flexDir={['column', 'row', 'row', 'row']}
          gridGap="2em"
          alignItems="center"
          justifyContent="center"
        >
          <Text cursor="pointer">DIGITAL SIMAKSI</Text>
          <Text cursor="pointer">RENT EQUIPMENT</Text>
          <Heading
            display={{ base: 'none', md: 'block' }}
            px="2em"
            fontSize="3em"
            cursor="default"
          >
            HIKERY
          </Heading>
          <Text cursor="pointer">SOCIALS</Text>
          <Text cursor="pointer">ABOUT</Text>
          <Text cursor="pointer">CONTACT</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
