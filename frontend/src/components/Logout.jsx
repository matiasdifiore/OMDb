import React from "react";

import {
  Flex,

  Stack,
  Text,
  Heading,

  Image
} from '@chakra-ui/react';

export default function Logout() {
  return (
    <Stack minH={'100vh'} bg="black" direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1}>
      <Text color="white" fontSize='6xl' >See you soon!</Text>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/6025e44d-830a-4c91-9b5c-6b94118d8eed/AR-es-20211115-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}