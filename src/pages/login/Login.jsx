import React from 'react';
import { Navigate } from 'react-router-dom';
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

const user = true;

const Login = () => {
  return (
    <>
      {user && <Navigate to="/" replace={true} />}
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
