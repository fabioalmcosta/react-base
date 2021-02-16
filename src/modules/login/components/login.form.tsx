import React, { useState } from 'react';
import {
  Icon,
  Input,
  Button,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Center,
  Box,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const Component: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (values: any): void => {
    setLoading(!loading);
    console.log('Success:', values);
  };

  return (
    <Center margin="auto" w="100%" h="100%">
      <Box
        w={['100%', '75%', '50%', '30%']}
        p={4}
        borderWidth="1px"
        borderRadius="lg"
      >
        <form name="basic" onSubmit={onSubmit}>
          <img
            src="https://picsum.photos/350/70"
            alt="Teste"
            width="100%"
            height="70px"
            style={{ marginBottom: '30px' }}
          />
          <InputGroup mt={2}>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaUserAlt} />}
            />
            <Input
              variant="outline"
              name="username"
              type="text"
              placeholder="Username"
              isRequired
            />
          </InputGroup>
          <InputGroup mt={2}>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaLock} />}
            />
            <Input
              variant="outline"
              name="password"
              type="text"
              placeholder="Password"
              isRequired
            />
          </InputGroup>
          <Box mt={2}>
            <Checkbox name="remember" defaultIsChecked>
              Remember me
            </Checkbox>
            <Box float="right">
              <a className="login-form-forgot" href="localhost:3000/login">
                Forgot password
              </a>
            </Box>
          </Box>
          <Button
            colorScheme="blue"
            variant="solid"
            isLoading={loading}
            mt={2}
            w="100%"
            type="submit"
          >
            Login
          </Button>
          <Box mt={2}>
            Or
            <a href="localhost:3000/login"> register now!</a>
          </Box>
        </form>
      </Box>
    </Center>
  );
};

export default Component;
