import React from 'react';
import {
  ListItemContainer,
  ListItemStatus,
  ListItemDate,
  ListItemContent,
} from './styled';
import { useNotesState, useNotesDispatch } from '../../providers/NotesContext';

export default function ListItem({
  index,
  status,
  date,
  content,
  style,
  onSelected,
}) {
  const { currentDayIdx } = useNotesState();
  const dispatch = useNotesDispatch();
  const handleItemClick = () => {
    dispatch({
      type: 'select-day',
      payload: index,
    });

    if (onSelected) onSelected();
  };

  console.log(
    'currentDayIndex',
    currentDayIdx,
    1 - (currentDayIdx - index) * 0.15,
  );

  return (
    <ListItemContainer
      style={style}
      selected={currentDayIdx === index}
      onClick={handleItemClick}
      // opacity={1 - (currentDayIdx - index) * 0.15}
      dir="ltr"
    >
      <ListItemStatus status={status}>{status}</ListItemStatus>
      <ListItemDate>{index === 0 ? 'Today' : date}</ListItemDate>
      <ListItemContent>{content}</ListItemContent>
    </ListItemContainer>
  );
}
