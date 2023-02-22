import React from 'react'
import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const HomePage = () => {
  return (
    
      <Container maxW='xl' centerContent>
        <Box
        d = 'flex'
        justifyContent="center"
        p = {3}
        w = "100%"
        bg = "white"
        m = "40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        >
          <Text
          fontSize='4xl'>Chat-A-Way</Text>
        </Box>
          <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList
            mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        <Box
        p = {4}
        w = "100%"
        bg = "white"
        m = "40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">

        </Box>
      </Container>

  )
};

export default HomePage;