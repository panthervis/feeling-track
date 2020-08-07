import styled, { css } from 'styled-components';

const StatusBadge = styled.div`
  background: transparent;
  border: 1.5px solid #cccccc;
  box-sizing: border-box;
  border-radius: 100px;
  text-align: center;
  color: #bbbbbb;
  width: 56px;
  height: 56px;

  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 56px;
  vertical-align: middle;

  cursor: pointer;

  ${(props) =>
    props.status &&
    props.selected &&
    css`
      background: ${props.theme.solid[props.status]};
      color: white;
      border: 0px;
    `}
`;

StatusBadge.defaultProps = {
  status: 0,
  selected: false,
};

export default StatusBadge;
