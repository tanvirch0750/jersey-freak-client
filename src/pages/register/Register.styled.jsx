import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://i.ibb.co/FWL3h2S/Roma-kit2223.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 26px;
  font-weight: 300;
  color: #f45d48;
  font-weight: 700;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

export const Agreement = styled.span`
  width: 100%;
  font-size: 12px;
  margin: 20px 0;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 16px;
  color: #fffffe;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid transparent;
  cursor: pointer;
  position: relative;
  background-color: #f45d48;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  @media (min-width: 768px) {
    padding: 13px 50px 13px;
  }
`;
