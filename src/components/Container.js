import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-content: center;

  position: relative;
  background: transparent;
  /* background: ${(props) => props.theme.gradient[props.status]}; */
`;

export const GradientBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: ${(props) => props.theme.gradient[props.status]};
  z-index: -1;
`;

Container.defaultProps = {
  status: 0,
};
