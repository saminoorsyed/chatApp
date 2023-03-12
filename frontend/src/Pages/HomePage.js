import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import elements from chakra UI
import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
// import components
import SignUp from '../components/authentication/SignUp';
import Login from '../components/authentication/Login';

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate('/chats');
  }, [navigate])
  return (
    
      <Container maxW='xl' centerContent>
        <Box
        display= 'flex'
        justifyContent="center"
        padding = {3}
        width = "100%"
        bg = "white"
        m = "40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        >
          <Text
          fontSize='4xl'>Chat-A-Way</Text>
        </Box>
        <Box
        padding= {4}
        width = "100%"
        background = "white"
        margin= "40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
          <Tabs variant='soft-rounded' colorScheme="gray">
            <TabList
            marginBottom="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login/>
              </TabPanel>
              <TabPanel>
                <SignUp/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>

  )
};

export default HomePage;