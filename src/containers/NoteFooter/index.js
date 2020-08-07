import React from 'react';
import { useNotesState } from '../../providers/NotesContext';
import { Container, Footer } from './styled';
import { getMonthYear } from '../../providers/NotesContext/utils';

export default function NoteFooter() {
  const { currentDayIdx, noteCount } = useNotesState();

  return (
    <Container>
      <Footer>{getMonthYear(noteCount - currentDayIdx)}</Footer>
    </Container>
  );
}
