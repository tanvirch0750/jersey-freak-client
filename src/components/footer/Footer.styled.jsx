import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.footer`
  padding: 80px 0;
  display: flex;

  ${mobile({
    padding: '0',
    flexDirection: 'column',
  })}
`;
export const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const FooterLogo = styled.h1``;

export const Description = styled.p`
  margin-bottom: 20px;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FooterCenter = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    display: 'none',
  })}
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const FooterRight = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Payment = styled.img`
  width: 50%;
`;
