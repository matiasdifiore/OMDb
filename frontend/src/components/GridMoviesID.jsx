import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardMovie from "../common/CardMovie";

function GridMoviesID() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`/api/movies/id/${id}`)
      .then((res) => res.data)
      .then((mov) => setMovie(mov));
  }, [id]);

  return (
    <div>
      <div>
        <CardMovie {...movie} />
      </div>
    </div>
  );
}

export default GridMoviesID;
