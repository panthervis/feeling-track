import React from 'react';
import styled, { css } from 'styled-components';

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 140px;
  max-height: 100%;
  max-width: 260px;

  padding: 16px 24px;
  background: rgba(252, 251, 252, 0.9);
  border: 4px solid #ffffff;
  border-radius: 20px;
  backdrop-filter: blur(5px);

  cursor: pointer;
`;

const ListItemStatus = styled.div`
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

const ListItemDate = styled.div`
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

const ListItemContent = styled.div`
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

export default function ListItem({ status, date, content }) {
  return (
    <ListItemContainer>
      <ListItemStatus status={status}>{status}</ListItemStatus>
      <ListItemDate>{date}</ListItemDate>
      <ListItemContent>{content}</ListItemContent>
    </ListItemContainer>
  );
}
