import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: inherit;
  padding: 14px 28px;
  width: 157px;
  height: 51px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;

  border: 1px solid ${(props) => props.theme.solid[props.status]};
  color: ${(props) => props.theme.solid[props.status]};
  border-radius: 12px;

  &:focus {
    outline: none;
  }
`;

Button.defaultProps = {
  status: 0,
};
