import React from "react";
import { Link } from "react-router-dom";
import {
  chakra,
  Box,
  Image,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function CardUser({ email, id, favorites }) {
  return (
    <Flex
      bg="black"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.h2>
            User ID: {id} Email: {email}
          </chakra.h2>
        </Flex>

        <Box mt={2}>
          <chakra.h1>Favorites:</chakra.h1>
        </Box>
        {favorites &&
          favorites.map((fav) => {
            return <Text>{fav}</Text>;
          })}
      </Box>
    </Flex>
  );
}

export default CardUser;

{
  /* <div className="columns">
<div className="column">
  <div className="card">
    <div className="card-body">
      <h3 className="card-title title is-5">Email: {email}</h3>
      <p className="card-text title is-5">USER ID: {id}</p>
    </div>
  </div>
</div>

<div className="column">
  <div className="card">
    {favorites && favorites.length ? (
      <div className="card">
        <p className="title is-5">Favorites:</p>
        {favorites.map((title) => (
          <Link to={`/movies/${title}`}>
            <p className="title is-6">{title}</p>
          </Link>
        ))}
      </div>
    ) : (
      <p className="title is-5">Don't have any favorites yet</p>
    )}
  </div>
</div>
</div> */
}
