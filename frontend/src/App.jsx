import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import GridMoviesSearch from "./components/GridMoviesSearch";
import GridMoviesID from "./components/GridMoviesID";
import GridUsers from "./components/GridUsers";
import GridUserID from "./components/GridUserID";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import GridMovies from "./components/GridMovies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "./state/user";

function App() {
  const dispatch = useDispatch();
  //Aca hago la persistencia.
  useEffect(() => {
    axios
      .get("/api/auth/me")
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Banner/>
          <GridMovies/>
          
        </Route>
        <Route exact path="/movies/id/:id">
          <GridMoviesID />
        </Route>
        <Route exact path="/movies/:search">
          <GridMoviesSearch />
        </Route>

        <Route exact path="/users">
          <GridUsers />
        </Route>
        <Route exact path="/users/:id">
          <GridUserID />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="/404" render={() => <Error />} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
