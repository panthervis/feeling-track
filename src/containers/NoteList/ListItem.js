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

  return (
    <ListItemContainer
      style={style}
      selected={currentDayIdx === index}
      onClick={handleItemClick}
      dir="ltr"
    >
      <ListItemStatus status={status}>{status}</ListItemStatus>
      <ListItemDate>
        {index === 0 ? 'Today' : index === 1 ? 'Yesterday' : date}
      </ListItemDate>
      <ListItemContent>
        <p>{content}</p>
      </ListItemContent>
    </ListItemContainer>
  );
}
