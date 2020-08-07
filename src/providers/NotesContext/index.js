import React from 'react';
import produce from 'immer';
import { getNotes, saveNoteToStorage } from './utils';
import { Note } from './model';

const NotesStateContext = React.createContext();
const NotesDispatchContext = React.createContext();

function notesReducer(state, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'select-day': {
        draft.currentDayIdx =
          action.payload >= state.notes.length
            ? state.notes.length - 1
            : action.payload <= 0
            ? 0
            : action.payload;

        console.log('select-day', draft.currentDayIdx);
        draft.currentNote = state.notes[draft.currentDayIdx];
        break;
      }

      case 'save-note': {
        const { status, text } = action.payload;
        draft.currentNote.content = action.payload;
        draft.currentNote.saveNote(status, text);
        draft.notes[state.currentDayIdx] = Note.clone(draft.currentNote);
        saveNoteToStorage(state.currentDayIdx, draft.currentNote);
        break;
      }

      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  });
}

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
