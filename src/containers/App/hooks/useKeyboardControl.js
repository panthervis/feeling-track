import { useEffect } from 'react';
import useKeyPress from '../../../lib/useKeyPress';
import { useNotesDispatch } from '../../../providers/NotesContext';

export default function useKeyboardControl() {
  const dispatch = useNotesDispatch();

  const leftArrowPressed = useKeyPress(37);
  const rightArrowPressed = useKeyPress(39);
  const homePressed = useKeyPress(36);
  const endPressed = useKeyPress(35);

  useEffect(() => {
    if (leftArrowPressed)
      dispatch({
        type: 'move-prev-day',
      });
  }, [dispatch, leftArrowPressed]);

  useEffect(() => {
    if (rightArrowPressed)
      dispatch({
        type: 'move-next-day',
      });
  }, [dispatch, rightArrowPressed]);

  useEffect(() => {
    if (homePressed)
      dispatch({
        type: 'select-today',
      });
  }, [dispatch, homePressed]);

  useEffect(() => {
    if (endPressed)
      dispatch({
        type: 'select-new-year-day',
      });
  }, [dispatch, endPressed]);
}
