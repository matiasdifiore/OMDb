import React from "react";
import {Link} from "react-router-dom"
import { Box, Stack, Heading, Text, Image, Center } from "@chakra-ui/react";

function CardMovies({ Title, Year, Poster, imdbID, Type }) {
  return (
    <Center py={12} bg="black">
    <Link to={`/movies/id/${imdbID}`}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg="black"
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          m={5}
        >
          <Box
            bg="black"
            rounded={"lg"}
            pos={"relative"}
            height={"230px"}
            borderRightWidth={2}
            // borderBottomWidth={2}
            boxShadow={"lg"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${Poster})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={229}
              width={282}
              objectFit={"contain"}
              src={Poster}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading
              fontSize={"md"}
              fontFamily={"body"}
              fontWeight={500}
              color="white"
            >
              {Year}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"} color="white">
                {Title}
              </Text>
            </Stack>
          </Stack>
        </Box>
     </Link>
    </Center>


  );
}

export default CardMovies;
