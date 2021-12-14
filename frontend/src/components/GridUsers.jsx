import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GrEdit, GrAdd } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import {
  chakra,
  Flex,
  Button,
  Stack,
  SimpleGrid,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  useDisclosure,
  ModalFooter,
  Box,
} from "@chakra-ui/react";

export default function Component() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/users`)
      .then((res) => res.data)
      .then((users) => setUsers(users));
  }, []);

  const IsolatedModal = ( {user} ) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box as="section">
        <Button variant="solid" colorScheme="red" size="sm" onClick={onOpen}>
          View Favorites
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader> Favorites</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {
                user?.favorites.map((fav) => {
                  return <Text>{fav}</Text>;
                })
                }
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  };


  return (
    <Flex
      w="full"
      bg="white"
      p={50}
      alignItems="center"
      justifyContent="center"
      bg="black"
    >
      {/* encabezado */}
      <Stack direction={{ base: "column" }} w="full" bg="white" shadow="lg">
        <Flex direction={{ base: "row", md: "column" }} bg="grey">
          <SimpleGrid
            spacingY={3}
            columns={{ base: 1, md: 4 }}
            w="full"
            py={2}
            px={10}
            fontWeight="hairline"
          >
            <span>User ID</span>
            <chakra.span
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              Email
            </chakra.span>
            <span></span>
            <chakra.span
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              View Favorites
            </chakra.span>
          </SimpleGrid>
        </Flex>

        {/* Filas a mapear */}
        {users?.map((user, cid) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg="white"
              key={cid}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 4 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <span>{user.id}</span>

                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {user.email}
                </chakra.span>

                <Flex></Flex>
                <Flex>
                  <>
                  
   
      
                    <Box>
                      <IsolatedModal user={user}></IsolatedModal>
                    </Box>
                  </>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}

// import { useState, useEffect } from "react";
// import axios from "axios";
// import CardUser from "../common/CardUser";

// function GridUsers() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`/api/users`)
//       .then((res) => res.data)
//       .then((users) => setUsers(users));
//   }, []);

//   return (
//     <div>
//       <div>
//         {users.map((user) => (
//           <CardUser {...user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default GridUsers;
