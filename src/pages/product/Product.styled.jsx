import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 90vh;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

export const Title = styled.h2`
  font-weight: 200;
  font-size: 36px;
  margin: 0;
`;

export const Description = styled.p`
  margin: 20px 0;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  width: 90%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterJersey = styled.div`
  padding: 5px 10px;
  background-color: #f45d48;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  padding: 10px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #078080;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
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

  @media (min-width: 768px) {
    padding: 13px 50px 13px;
  }
`;
