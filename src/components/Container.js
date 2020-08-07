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

export const AppName = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: white;
`;

export const NoteCardContainer = styled.div`
  flex-grow: 1;
  margin: 5.3rem auto 0 auto;
  width: 80%;

  @media screen and (min-width: 70em) {
    margin: 8.3rem auto 0 auto;
    width: 60%;
  }
`;

export const NoteListContainer = styled.div`
  margin: 2rem 1.5rem 1rem 1.5rem;
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
