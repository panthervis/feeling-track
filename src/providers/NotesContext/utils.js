import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import { Note } from './model';

dayjs.extend(dayOfYear);

export function getCurrentDate(formats) {
  return dayjs().format(formats);
}

export function getNotes() {
  const lastDay = localStorage.getItem('lastDay');
  let notes;

  if (!lastDay) {
    const todayOfYear = dayjs().dayOfYear();

    notes = new Array(todayOfYear).fill(1).map(
      (_, index) =>
        new Note(
          0,
          '',
          dayjs('2020-01-01')
            .dayOfYear(index + 1)
            .format('MMM DD'),
          null,
        ),
    );
  } else {
    notes = localStorage.getItem('notes') || [];
  }

  return notes;
}
