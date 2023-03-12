import React, {useState} from 'react'
// Import components and Icons
import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Toast, Tooltip, useDisclosure, useToast } from '@chakra-ui/react';
import {BellIcon, ChevronDownIcon} from '@chakra-ui/icons'
import { ChatState } from '../../context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom';
import ChatLoading from './ChatLoading';
import axios from 'axios';
import UserListItem from '../userAvatar.js/UserListItem';

const SideDrawer = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState();
    const [loadingChat, setLoadingChat] = useState();
    const {user} = ChatState();

    const navigate = useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const logoutHandler = () => {
        localStorage.removeItem("userInfo");
        navigate("/");
    }
    const toast = useToast()
    const handleSearch = async ()=>{
        if(!search){
            toast({
                title:"Please Enter username or email to search",
                status:"warning",
                duration:4500,
                isClosable: true,
                position: "top-left",
            });
        }
        try {
            setLoading(true)

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
            };

            const {data} = await axios.get(`/api/user?search=${search}`, config)

            setLoading(false);
            setSearchResult(data)
        } catch (error) {
            toast({
                title:"Error, failed to load results!",
                status:"warning",
                duration:4500,
                isClosable: true,
                position: "bottom-left",
            });
        }
    }
    const accessChat = (userId)=>{

    }
  return (
    <>
    <Box
        display="flex"
        justifyContent = "space-between"
        alignItems= "center"
        background = "white"
        width = "100%"
        padding = "5px 10px 5px 10px"
        borderWidth = "5px">
        <Tooltip 
            label = "Click to search users" 
            hasArrow
            placeContent='bottom-end'
            >
            <Button variant = "ghost" onClick={onOpen}>
                <i className="fas fa-search"></i>
                <Text d = {{base:"none", middle: "flex"}} px = "4">
                    Search User
                </Text>
            </Button>
        </Tooltip>

        <Text fontSize="2xl"> 
            Chat App
        </Text>
        <div>
            <Menu>
                <MenuButton padding = {1}>
                    <BellIcon fontSize="2xl" m = {1}/>
                </MenuButton>
                {/* <MenuList></MenuList> */}
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                    <Avatar 
                    size='sm' 
                    cursor='pointer' 
                    name='user.name' 
                    src = {user.pic} 
                    />
                </MenuButton>
                <MenuList>
                    <ProfileModal user= {user}>
                        {/* <MenuItem>My Profile</MenuItem> */}
                    </ProfileModal>
                    <MenuDivider/>
                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>
            </Menu>
        </div>
    </Box>

    <Drawer placement='left' onClose= {onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
                Search User
            </DrawerHeader>
            <DrawerBody>
                <Box display="flex" paddingBottom={2}>
                    <Input
                        placeholder="Search by name or email"
                        marginRight={2}
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        />
                    <Button 
                    onClick={handleSearch}
                    >
                    Go
                    </Button>
                </Box>
                {loading ? (
                    <ChatLoading/>
                ):( 
                    searchResult?.map(user=> (
                        <UserListItem
                            key = {user._id}
                            user = {user}
                            handleFunction={()=>accessChat(user._id)}
                        />
                    )))}
        </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
};

export default SideDrawer