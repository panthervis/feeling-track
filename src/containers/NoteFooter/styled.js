import styled from 'styled-components/macro';

export const Container = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 70px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  color: white;

  font-style: normal;
  font-weight: 500;
`;
