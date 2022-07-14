import Navbar from '../../components/navigation/Navbar';
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from './Register.styled';

const Register = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Register</Title>
          <Form>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <Agreement>I read the privacy policy</Agreement>
            <Button type="submit">Register</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
