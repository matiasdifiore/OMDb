import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  useColorModeValue,
  Button,
  Container,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      className="footer"
      bottom={"0"}
      w="100%"
      borderTopWidth={1}
      borderStyle={"solid"}
      bg="black"
      p={5}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        direction={{ base: "column", md: "row" }}
        justify={{ md: "space-between" }}
        align={{ md: "center" }}
      >
        <Text color="red">© 2021 Netfly. All rights reserved</Text>
        <Stack direction={"row"} spacing={1}>
          <Box overflow="auto" float="left" w="150px" h="auto">
            <img
              src="https://cdn.discordapp.com/attachments/907264911640526891/914393451108376596/unknown.png"
              alt="logo"
            />
          </Box>
          {/* <Button label={'Twitter'} href={'#'}>
          <FaTwitter />
        </Button>
        <Button label={'YouTube'} href={'#'}>
          <FaYoutube />
        </Button>
        <Button label={'Instagram'} href={'#'}>
          <FaInstagram />
        </Button> */}
        </Stack>
      </Container>
    </Box>
  );
}
