import styled, { css } from 'styled-components';

const StatusBadge = styled.div`
  display: inline;
  background: transparent;
  border: 1.5px solid #cccccc;
  box-sizing: border-box;
  border-radius: 50%;
  text-align: center;
  color: #bbbbbb;
  width: 3.5rem;

  font-style: normal;
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 3.5rem;
  vertical-align: middle;

  cursor: pointer;

  /* transition: background 0.5s linear; */

  ${(props) =>
    props.status &&
    props.selected &&
    css`
      background: ${props.theme.solid[props.status]} !important;
      color: white;
      border: 0px;
      z-index: 2;
    `}
`;

StatusBadge.defaultProps = {
  status: 0,
  selected: false,
};

export default StatusBadge;
