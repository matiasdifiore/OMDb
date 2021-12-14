// import axios from "axios";
// import React from "react";
// import { useState, useEffect, Fragment } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginRequest } from "../state/user";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const handleLogin = (e, email, password) => {
//     e.preventDefault();
//     dispatch(loginRequest({ email, password })).then((res) => {
//       return res;
//     });
//     history.push("/");
//   };

//   const handleEmail = (eventE) => {
//     setEmail(eventE.target.value);
//   };
//   const handlePassword = (eventP) => {
//     setPassword(eventP.target.value);
//   };

//   return (
//     <Fragment>
//       <h1 class="title">Log in</h1>
//       <form onSubmit={(e) => handleLogin(e, email, password)}>
//         <div className="field">
//           <label className="label">Email</label>
//           <div className="control">
//             <input
//               className="input"
//               type="text"
//               placeholder="Email"
//               onChange={handleEmail}
//             />
//           </div>
//           <p className="help">Please, enter your email.</p>
//         </div>

//         <div class="field">
//           <label class="label">Password</label>
//           <div class="control">
//             <input
//               class="input"
//               type="password"
//               placeholder="Password"
//               onChange={handlePassword}
//             />
//           </div>
//           <p class="help">Please, enter your password.</p>
//         </div>

//         <div class="control">
//           <button class="button is-primary" type="submit">
//             Sign up
//           </button>
//         </div>
//       </form>
//     </Fragment>
//   );
// }

// export default LoginForm;


import React from "react";
import { useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRequest } from "../state/user";
import { useForm } from "react-hook-form";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
   e.preventDefault();
    dispatch(loginRequest({ email, password })).then((res) => {
      return res
      
    }).then(()=>history.push("/"))
  };


  return (
    <Stack minH={'100vh'} bg="black" direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'} color="white">Login to your account</Heading>
          <form onSubmit={handleSubmit}>
          <FormControl id="email">
            <FormLabel color="white">Email address</FormLabel>
            <Input
                type="text"
                bg="white"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
          </FormControl>

          <FormControl id="password" >
            <FormLabel color="white" >Password</FormLabel>
            <Input
                type="password"
                bg="white"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
          </FormControl>

          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox color="white">Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'red'} variant={'solid'} type="submit">
              Sign in
            </Button>
          </Stack>

        </form>
        </Stack>
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