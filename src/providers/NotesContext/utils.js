import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import { Note } from './model';

dayjs.extend(dayOfYear);

const YearStartDay = '2020-01-01';

/**
 * Get formatted string of date
 * @param {String} formats
 */
export function getCurrentDate(formats) {
  return dayjs().format(formats);
}

/**
 * Convert dayOfYear into date in 'Month Year' format
 * @param {Number} dayOfYear
 */
export function getMonthYear(dayOfYear) {
  dayjs(YearStartDay).dayOfYear(dayOfYear).format('MMMM YYYY');
}

/**
 * Create or read notes from localStorage
 * @returns Note[]
 */
export function getNotes() {
  let notes = readNotesFromStorage();

  if (notes === null) {
    const todayOfYear = dayjs().dayOfYear();

    notes = new Array(todayOfYear).fill(1).map(
      (_, index) =>
        new Note(
          0,
          '',
          dayjs(YearStartDay)
            .dayOfYear(index + 1)
            .format('MMM DD'),
          null,
        ),
    );
  }

  return notes;
}

/**
 * Save note to local storage
 * @param {Number} dayIndex
 * @param {Note} note
 */
export function saveNoteToStorage(dayIndex, note) {
  let notes = localStorage.getItem('notes');

  notes = notes ? JSON.parse(notes) : {};

  notes[dayIndex] = note.values();

  localStorage.setItem('notes', JSON.stringify(notes));
  localStorage.setItem('lastSavedDay', dayIndex);
}

/**
 * Read notes from storage
 */
function readNotesFromStorage() {
  let notes = localStorage.getItem('notes');
  if (notes === null) return null;

  notes = JSON.parse(notes);

  const todayOfYear = dayjs().dayOfYear();

  const noteArray = new Array(todayOfYear).fill(1).map((_, index) => {
    if (index in notes) {
      const { status, text, date, savedAt } = notes[index];
      return new Note(status, text, date, savedAt);
    } else {
      return new Note(
        0,
        '',
        dayjs(YearStartDay)
          .dayOfYear(index + 1)
          .format('MMM DD'),
        null,
      );
    }
  });

  return noteArray;
}
