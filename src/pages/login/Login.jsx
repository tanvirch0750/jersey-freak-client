import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import {
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from './Login.styled';

const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Login</Title>
          <Form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button>Login</Button>
            <Link>Forgot Password?</Link>
            <Link>Create A New Account</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
