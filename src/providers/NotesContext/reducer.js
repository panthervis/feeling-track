import produce from 'immer';
import { saveNoteToStorage } from './utils';
import { Note } from './model';

export default function notesReducer(state, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'select-day': {
        draft.currentDayIdx =
          action.payload >= state.noteCount
            ? state.noteCount - 1
            : action.payload <= 0
            ? 0
            : action.payload;

        draft.currentNote = state.notes[draft.currentDayIdx];
        break;
      }

      case 'select-new-year-day': {
        draft.currentDayIdx = state.notes.length - 1;
        draft.currentNote = state.notes[draft.currentDayIdx];
        break;
      }

      case 'select-today': {
        draft.currentDayIdx = 0;
        draft.currentNote = state.notes[0];
        break;
      }

      case 'move-prev-day': {
        draft.currentDayIdx =
          state.currentDayIdx >= state.noteCount - 1
            ? state.noteCount - 1
            : state.currentDayIdx + 1;
        draft.currentNote = state.notes[draft.currentDayIdx];
        break;
      }

      case 'move-next-day': {
        draft.currentDayIdx =
          state.currentDayIdx <= 0 ? 0 : state.currentDayIdx - 1;
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
