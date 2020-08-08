import React from 'react';

import { getNotes } from './utils';
import notesReducer from './reducer';

const NotesStateContext = React.createContext();
const NotesDispatchContext = React.createContext();

function NotesProvider({ children }) {
  const notes = getNotes().reverse();
  const savedLastDay = parseInt(localStorage.getItem('lastSavedDay') || 0);

  if (notes.length <= 0) {
    throw new Error('Error during parsing notes');
  }

  const [state, dispatch] = React.useReducer(notesReducer, {
    notes,
    noteCount: notes.length,
    currentDayIdx: savedLastDay,
    currentNote: notes[savedLastDay],
  });

  return (
    <NotesStateContext.Provider value={state}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesStateContext.Provider>
  );
}

function useNotesState() {
  const context = React.useContext(NotesStateContext);
  if (context === undefined) {
    throw new Error('useNotesState must be used within a NotesProvider');
  }
  return context;
}

function useNotesDispatch() {
  const context = React.useContext(NotesDispatchContext);
  if (context === undefined) {
    throw new Error('useNotesDispatch must be used within a NotesProvider');
  }
  return context;
}

export { NotesProvider, useNotesState, useNotesDispatch };
