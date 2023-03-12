import {IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Text}
  from '@chakra-ui/react';
import { ViewIcon } from "@chakra-ui/icons";
import React from 'react'

const ProfileModal = ({user, children}) => {

const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}> {children} </span>
        ):(
          <IconButton
            d={{base: "flex"}}
            icon={<ViewIcon/>}
            onClick={onOpen}
            />
      )}
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height="410px">
          <ModalHeader
            fontSize="40px"
            display="flex"
            justifyContent="center"
          >
            {user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between">
            <Image
              borderRadius="full"
              boxSize = "150px"
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{base:"28px", middle: "30px"}}>
                Email: {user.email}
            </Text>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModal