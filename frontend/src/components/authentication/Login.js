// import react dependencies
import React, {useState} from 'react'
// import elements from chakra ui
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const Login = () => {
    const [show, setShow] =useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword]= useState();
    

    const handleClick = () => setShow(!show);
    const submitHandler= ()=>{};
  return (
    <VStack spacing= '5px' color="black">
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
        <Button
            colorScheme="blue"
            width="100%"
            style = {{marginTop:15}}
            onClick={submitHandler}
            >Login
        </Button>
        <Button
            variant="solid"
            colorScheme="red"
            width="100%"
            style = {{marginTop:15}}
            onClick={()=>{
                setEmail("guest@example.com");
                setPassword("123456");
            }}

            >Login as a guest
        </Button>
    </VStack>
  )
}

export default Login