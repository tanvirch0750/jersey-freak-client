import styled from 'styled-components';

export const Container = styled.div`
  width: 100%auto;
  height: calc(100vh - 120px);
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  width: 35px;
  height: 35px;
  background-color: rgba(7, 128, 128, 0.418);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

export const ImageContainer = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 90%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 52px;
  text-transform: uppercase;
  color: #232323;
`;
export const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const Button = styled.button`
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
  background-color: #078080;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :after {
    content: '';
    background-color: #f45d48;
    width: 100%;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
    z-index: -1;
  }

  :hover:after {
    top: 0px;
    left: 0px;
  }

  @media (min-width: 768px) {
    padding: 13px 50px 13px;
  }
`;
