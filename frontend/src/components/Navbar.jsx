import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutRequest } from "../state/user";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  chakra,
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  Input,
} from "@chakra-ui/react";

const Navbar = () => {
  const history = useHistory();
  const mobileNav = useDisclosure();
  const user = useSelector((state) => state.user);
  console.log("user", user);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    dispatch(logoutRequest());
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/movies/${search}`);
  };
  console.log(user);
  return (
    <React.Fragment>
    <chakra.header
      bg={"black"}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto" color="#ffcd1f">
        <Flex>
          <Link to="/">
            <chakra.h1 fontSize="xl" fontWeight="semi-bold" ml="2">
              <Box overflow="auto" float="left" w="175px" h="auto">
              <img 
              src="https://cdn.discordapp.com/attachments/907264911640526891/914393451108376596/unknown.png" alt="logo" />
              </Box>
            {/* <FontAwesomeIcon icon={faRecordVinyl} size='2x'/> */} {/* devMusic */}
            </chakra.h1>
          </Link>
        </Flex>

        <HStack display="flex" alignItems="center" justify="stretch" >
          <HStack
            spacing={2}
            mr={1}
            color="brand.500"
            display={{ base: "none", md: "inline-flex" }}
          >
            <form onSubmit={handleSubmit}>
              <InputGroup   >
                <Input
                  type="text"
                  color="black"
                  placeholder="Search..."
                  value={search}
                  mr={250}
                  bg="white"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>
            </form>
            <form onSubmit={handleSubmit}>
        
        </form>

            {user?.id ? (
              <>
                <Link to={`/users/${user.id}`}>
                  <Button variant="solid"   color="#0c0f0a"
                      bg="red">
                    Profile
                  </Button>
                </Link>
                <Link to="/users">
                <Button variant="solid"   color="#0c0f0a"
                      bg="red">Users</Button>
          </Link>

                <Link to="/logout">
                  <Button variant="solid"   color="#0c0f0a"
                      bg="red"
                      onClick={handleLogout}
                      >
                    Logout
                  </Button>
                </Link>
                </>
            ):(
              <>
              <Link to="/login">
              <Button variant="solid"   color="#0c0f0a"
                  bg="red">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="solid"   color="#0c0f0a"
                  bg="red">
                Sign Up
              </Button>
            </Link>
            </>
            )}
               
          
          </HStack>
        </HStack>
      </Flex>
    </chakra.header>
  </React.Fragment>
  
  );
};

export default Navbar;


{/* <nav className="navbar" role="navigation" aria-label="main navigation" bg="black">
<div className="navbar-brand">
  <Link to="/">
    <a className="navbar-item">
      <img src="/logo.png" width="60" height="100" />
    </a>
  </Link>

  <a
    role="button"
    className="navbar-burger"
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</div>

<div id="navbarBasicExample" className="navbar-menu">
  <div className="navbar-start">
    <a className="navbar-item">
      <Link to="/">
        <a className="navbar-item ">Home</a>
      </Link>
    </a>

    <div className="navbar-item is-hoverable">
      <a className="navbar-item">
        <form onSubmit={handleSubmit}>
          <input
            class="input is-primary"
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
          />
        </form>
      </a>
    </div>
  </div>
  {user?.id ? (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to={`/users/${user.id}`}>
            <a className="button is-primary">
              <strong>Profile</strong>
            </a>
          </Link>
          <Link to="/users">
            <a className="button is-light">Users</a>
          </Link>
          <Link to="/logout">
            <a className="button is-light" onClick={handleLogout}>
              Log out
            </a>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to="/register">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
          </Link>
          <Link to="/login">
            <a className="button is-light">Log in</a>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>
</nav> */}