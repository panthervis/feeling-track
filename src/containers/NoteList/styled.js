import styled, { css } from 'styled-components';

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 140px;
  max-height: 100%;
  /* max-width: 260px; */

  padding: 16px 24px;
  background: #fcfbfc;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  cursor: pointer;

  border: ${(props) =>
    props.selected ? '4px solid #ffffff' : '4px solid #fcfbfc'};

  opacity: 0.1;

  &:nth-child(0) {
    opacity: 1;
  }

  &:nth-child(1) {
    opacity: 0.9;
  }

  &:nth-child(2) {
    opacity: 0.8;
  }

  &:nth-child(3) {
    opacity: 0.7;
  }

  &:nth-child(4) {
    opacity: 0.6;
  }

  &:nth-child(5) {
    opacity: 0.5;
  }

  &:nth-child(6) {
    opacity: 0.4;
  }

  &:nth-child(7) {
    opacity: 0.3;
  }

  &:nth-child(8) {
    opacity: 0.2;
  }

  &:nth-child(9) {
    opacity: 0.1;
  }
`;

export const Container = styled.div`
  flex: 1 1 auto;

  &:hover ${ListItemContainer} {
    opacity: 1 !important;
  }
`;

ListItemContainer.defaultProps = {
  selected: false,
  opacity: 1,
};

export const ListItemStatus = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 30px;
  width: 27px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  vertical-align: middle;

  color: ${(props) => props.theme.solid[props.status]};

  ${(props) =>
    props.status === 0 &&
    css`
      background: transparent;
      border: 2px solid #ffffff;
    `};
`;

ListItemStatus.defaultProps = {
  status: 0,
};

export const ListItemDate = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #333333;
`;

export const ListItemContent = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  width: 100%;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666666;
`;

export const ListOuterElement = styled.div`
  /*change the thinkness of the scrollbar here*/
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }
  /*add a shadow to the scrollbar here*/
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }
  /*this is the little scrolly dealio in the bar*/
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.5);
    height: 3px;
  }
  /*nobody needs this little scrollbar corner, I mean really, get rid of it haha*/
  &::-webkit-scrollbar-corner {
    display: none;
    height: 0px;
    width: 0px;
  }
`;
