import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: start;
  grid-gap: 20px;
`;
