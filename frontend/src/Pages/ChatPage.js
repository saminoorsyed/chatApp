import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChatState } from '../context/ChatProvider';

// IMPORT COMPONENTS
import { Box } from '@chakra-ui/react';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyCHats from '../components/miscellaneous/MyCHats';
import ChatBox from '../components/miscellaneous/ChatBox';

const ChatPage = () => {
  const { user } = ChatState()
  return (
    <div style={{width:"100%"}}>
      { user && <SideDrawer/> }
      <Box
      display="flex"
      justifyContent='space-between'
      width = '100%'
      height = '91.5vh'
      padding = '10px'>
        {user && <MyCHats/>}
        {user && <ChatBox/>}

      </Box>
    </div>
  )
}

export default ChatPage