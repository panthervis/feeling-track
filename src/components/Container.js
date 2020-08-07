import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-content: center;

  transition: background-color 0.5s ease;
  background: ${(props) => props.theme.gradient[props.status]};
`;

Container.defaultProps = {
  status: 0,
};
