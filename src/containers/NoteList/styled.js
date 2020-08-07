import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  /* overflow-x: scroll; */
  flex-direction: row-reverse;

  > * {
    margin: 0 1.1817rem;
  }
`;
