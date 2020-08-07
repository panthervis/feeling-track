import styled, { css } from 'styled-components';

export const Container = styled.div`
  flex: 1 1 auto;
`;

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 140px;
  max-height: 100%;
  max-width: 260px;

  padding: 16px 24px;
  background: #fcfbfc;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  cursor: pointer;

  border: ${(props) =>
    props.selected ? '4px solid #ffffff' : '4px solid #fcfbfc'};

  ${Container}:hover * {
    opacity: 1 !important;
  }

  &:last-child {
    opacity: 1;
  }

  &:nth-child(2n) {
    opacity: 0.85;
  }

  &:nth-child(3n) {
    opacity: 0.6;
  }

  &:nth-child(4n) {
    opacity: 0.45;
  }

  &:nth-child(5n) {
    opacity: 0.3;
  }

  &:nth-child(6n) {
    opacity: 0.15;
  }
`;

ListItemContainer.defaultProps = {
  selected: false,
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
