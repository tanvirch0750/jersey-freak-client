import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  padding: 80px 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  ${mobile({
    flexDirection: 'column',
    paddingTop: '30px',
  })}
`;
