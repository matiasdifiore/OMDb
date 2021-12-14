import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardUser from "../common/CardUser";
import { useSelector } from "react-redux";

function GridMoviesID() {
  const { id } = useParams();
  const [userID, setUserID] = useState({});
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get(`/api/users/${id}`)
      .then((res) => res.data)
      .then((us) => setUserID(us));
  }, [id]);

  return (
    <div>
      {user.id ? (
        <div>
          <CardUser {...userID} />
        </div>
      ) : (
        <div>Donde queres entrar picaron?</div>
      )}
    </div>
  );
}

export default GridMoviesID;
