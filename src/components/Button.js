import styled from 'styled-components/macro';

export const Button = styled.button`
  border: none;
  background-color: inherit;
  padding-left: 2.75rem;
  padding-right: 2.75rem;
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;

  border: 1px solid ${(props) => props.theme.solid[props.status]};
  color: ${(props) => props.theme.solid[props.status]};
  border-radius: 12px;
  transition: box-shadow 0.5s linear;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 6px 8px 0 ${(props) => props.theme.solid[props.status]};
  }
`;

Button.defaultProps = {
  status: 0,
};
