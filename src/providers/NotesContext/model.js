import { getCurrentDate } from './utils';

export class Note {
  constructor(status = 0, text = '', date = 'Jan 01', savedAt = null) {
    this.status = status;
    this.text = text;
    this.date = date;
    this.savedAt = savedAt;
  }

  static clone(note) {
    const newNote = new Note();
    Object.assign(newNote, note);

    return newNote;
  }

  saveNote(status, text) {
    this.status = status;
    this.text = text;
    this.savedAt = getCurrentDate('MMM DD') + ' at ' + getCurrentDate('h:mm A');
  }

  values() {
    return {
      status: this.status,
      text: this.text,
      date: this.date,
      savedAt: this.savedAt,
    };
  }
}
