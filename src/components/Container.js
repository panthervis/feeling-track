import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-content: center;

  background: ${(props) => props.theme.gradient[props.status]};
`;

Container.defaultProps = {
  status: 0,
};
