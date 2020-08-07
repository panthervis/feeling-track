import React from 'react';
import {
  ListItemContainer,
  ListItemStatus,
  ListItemDate,
  ListItemContent,
} from './styled';
import { useNotesState, useNotesDispatch } from '../../providers/NotesContext';

export default function ListItem({ index, status, date, content, style }) {
  const { currentDayIdx, noteCount } = useNotesState();
  const dispatch = useNotesDispatch();
  const handleItemClick = () => {
    dispatch({
      type: 'select-day',
      payload: index,
    });
  };

  return (
    <ListItemContainer
      style={style}
      selected={currentDayIdx === index}
      onClick={handleItemClick}
    >
      <ListItemStatus status={status}>{status}</ListItemStatus>
      <ListItemDate>{index === noteCount - 1 ? 'Today' : date}</ListItemDate>
      <ListItemContent>{content}</ListItemContent>
    </ListItemContainer>
  );
}
