import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Navbar from '../../components/navigation/Navbar';
import { login } from '../../redux/apiCalls';
import {
  Button,
  Container,
  Error,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from './Login.styled';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { userName, password });
  };

  return (
    <>
      {currentUser && <Navigate to="/" replace={true} />}
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Login</Title>
          <Form>
            <Input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} disabled={isFetching}>
              Login
            </Button>
            {error && <Error>Please provide valid credentials</Error>}
            <Link>Forgot Password?</Link>
            <Link>Create A New Account</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
