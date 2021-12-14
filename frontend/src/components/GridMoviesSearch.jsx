import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardMovies from "../common/CardMovies";
import {
  Flex,
  Wrap,
  WrapItem
} from '@chakra-ui/react';

function GridMoviesSearch() {
  const { search } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/movies/search/${search}`)
      .then((res) => res.data.Search)
      .then((mov) => setMovies(mov));
  }, [search]);

  return (
    <Flex direction="column">
    <Flex direction="row" bg="black">
      <Wrap spacing="10px" justify="center" mr="10px">
        {movies.map((peli, i) => (
          <WrapItem key={i}>
            <CardMovies key={i} {...peli} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
    </Flex>
  );
}

export default GridMoviesSearch;
