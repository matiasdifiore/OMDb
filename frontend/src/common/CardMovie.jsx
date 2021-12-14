import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorites, removeFavorites } from "../state/user";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import { GrFavorite } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

function CardMovie({
  Title,
  Year,
  Poster,
  imdbID,
  Type,
  Actors,
  Awards,
  Director,
  Plot,
  imdbRating,
}) {
  const dispatch = useDispatch();

  const handleAdd = (Title) => {
    dispatch(addFavorites(Title)).then((res) => {
      return res;
    });
  };

  const handleRemove = (Title) => {
    dispatch(removeFavorites(Title)).then((res) => {
      return res;
    });
  };

  return (
    <Flex
      bg="black"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="black"
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: "full", lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
          >
            <Image rounded={"lg"} objectFit={"contain"} src={Poster} />
          </Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="white"
            fontWeight="bold"
          >
            {Title}
          </chakra.h2>
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            {Year}
          </chakra.h1>
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            {Actors}
          </chakra.h1>
          <chakra.p mt={4} color="white">
            {Plot}
          </chakra.p>

          <Box mt={8}>
            <Stack direction={"row"} align={"center"}>
              <Button
                variant="solid"
                colorScheme="red"
                size="sm"
                mr={2}
                onClick={() => handleAdd(Title)}
              >
                <GrFavorite />
              </Button>
              <Button
                variant="solid"
                colorScheme="red"
                size="sm"
                mr={2}
                onClick={() => handleRemove(Title)}
              >
                <AiFillDelete />
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default CardMovie;
