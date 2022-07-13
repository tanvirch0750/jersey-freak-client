import {
  EmailOutlined,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import {
  ContactItem,
  Container,
  Description,
  FooterCenter,
  FooterLeft,
  FooterLogo,
  FooterRight,
  List,
  ListItem,
  Payment,
  SocialContainer,
  SocialIcon,
  Title,
} from './Footer.styled';

const Footer = () => {
  return (
    <Container>
      <FooterLeft>
        <FooterLogo>Jesrsy Freak</FooterLogo>
        <Description>
          Jersey Freak always provide authentic jersey that club's jersy sponsor
          provide. We are number one jersey selling company in the country.
          Customer satisfaction is our main priorty.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </FooterLeft>
      <FooterCenter>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Laliga</ListItem>
          <ListItem>Premier League</ListItem>
          <ListItem>Seria A</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Laliga</ListItem>
          <ListItem>Premier League</ListItem>
          <ListItem>Seria A</ListItem>
        </List>
      </FooterCenter>
      <FooterRight>
        <Title>Contact</Title>
        <ContactItem>
          <Room />
          1230, Dhaka Mirpur 2
        </ContactItem>
        <ContactItem>
          <Phone /> +8801302047933
        </ContactItem>
        <ContactItem>
          <EmailOutlined /> tanvirch7575@gmail.com{' '}
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </FooterRight>
    </Container>
  );
};

export default Footer;
