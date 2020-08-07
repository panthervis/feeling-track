import React from 'react';
import produce from 'immer';
import { getNotes } from './utils';
import { Note } from './model';

const NotesStateContext = React.createContext();
const NotesDispatchContext = React.createContext();

function notesReducer(state, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'select-day': {
        draft.currentDayIdx = action.payload;
        draft.currentNote = state.notes[action.payload];
        break;
      }

      case 'save-note': {
        const { status, text } = action.payload;
        draft.currentNote.content = action.payload;
        draft.currentNote.saveNote(status, text);
        draft.notes[state.currentDayIdx] = Note.clone(draft.currentNote);

        console.log('saved', draft.notes[state.currentDayIdx]);
        break;
      }

      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  });
}

function NotesProvider({ children }) {
  const notes = getNotes();

  if (notes.length <= 0) {
    throw new Error('Error during parsing notes');
  }

  const [state, dispatch] = React.useReducer(notesReducer, {
    notes,
    currentDayIdx: notes.length - 1,
    currentNote: notes[notes.length - 1],
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
