// import react dependencies
import React, {useState} from 'react'
// import elements from chakra ui
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const SignUp = () => {
    const [show, setShow] =useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword]= useState();
    const [password, setPassword]= useState();
    const [pic, setPic]= useState();

    const handleClick = () => setShow(!show);
    const postDetails = ()=>{};
    const submitHandler= ()=>{};
  return (
    <VStack spacing= '5px' color="black">
        <FormControl>
            <FormLabel>Name*</FormLabel>
            <Input
                placeholder='enter your name'
                onChange={(e)=> setName(e.target.value)}></Input>
        </FormControl>
        <FormControl>
            <FormLabel>Email*</FormLabel>
            <Input
                placeholder='enter your email address'
                onChange={(e)=> setEmail(e.target.value)}></Input>
        </FormControl>
        <FormControl>
            <FormLabel>Password*</FormLabel>
            <InputGroup>
                <Input
                    type={show? "text":"password"}
                    placeholder='enter a password'
                    onChange={(e)=> setPassword(e.target.value)}>

                </Input>
                <InputRightElement width="4.5rem">
                    <Button height="1.75rem" size = "sm" onClick = {handleClick}>
                        {show ? "Hide": "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl>
            <FormLabel>Password*</FormLabel>
            <InputGroup>
                <Input
                    type={show? "text":"password"}
                    placeholder='enter a password'
                    onChange={(e)=> setConfirmPassword(e.target.value)}>

                </Input>
                <InputRightElement width="4.5rem">
                    <Button height="1.75rem" size = "sm" onClick = {handleClick}>
                        {show ? "Hide": "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id='pic'>
            <FormLabel>Upload your picture</FormLabel>
            <Input
                type="file"
                padding={1.5}
                accept="image/*"
                onChange={(e)=> postDetails(e.target.files[0])}
            />
        </FormControl>
        <Button
            colorScheme="blue"
            width="100%"
            style = {{marginTop:15}}
            onClick={submitHandler}>
                SignUp!
            </Button>
    </VStack>
  )
}

export default SignUp