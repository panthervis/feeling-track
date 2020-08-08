import React from 'react';
import {
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
  CardDate,
  StatusList,
  StatusText,
} from './styled';
import StatusBadge from '../../components/StatusBadge';
import { Button } from '../../components/Button';
import {
  useFeelStatusState,
  useFeelStatusDispatch,
} from '../../providers/FeelStatusContext';

import { useNotesState, useNotesDispatch } from '../../providers/NotesContext';

export default function NoteCard() {
  const [text, setText] = React.useState('');
  const [isSaved, setIsSaved] = React.useState(false);
  const inputRef = React.useRef();

  const { status } = useFeelStatusState();
  const { currentNote } = useNotesState();
  const dispatchStatus = useFeelStatusDispatch();
  const dispatchNote = useNotesDispatch();

  // Update status
  React.useEffect(() => {
    dispatchStatus({
      type: 'set',
      payload: status,
    });
  }, [dispatchStatus, status]);

  // Load text
  React.useEffect(() => {
    setText(currentNote.text);
  }, [currentNote.text]);

  // Load status
  React.useEffect(() => {
    dispatchStatus({
      type: 'set',
      payload: currentNote.status,
    });
  }, [dispatchStatus, currentNote.status]);

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleSaveClick = () => {
    dispatchNote({
      type: 'save-note',
      payload: {
        status,
        text,
      },
    });
    setTimeout(() => setIsSaved(true), 500);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);

    if (isSaved) setIsSaved(false);
  };

  return (
    <CardContainer>
      <CardHeader>
        <h1>How are you feeling today?</h1>

        <StatusList>
          <StatusText>Awful</StatusText>
          {[1, 2, 3, 4, 5].map((v) => (
            <StatusBadge
              key={v}
              status={v}
              selected={v === status}
              onClick={() => {
                if (v !== status) setIsSaved(false);
                dispatchStatus({
                  type: 'set',
                  payload: v,
                });
              }}
            >
              {v}
            </StatusBadge>
          ))}
          <StatusText>Amazing</StatusText>
        </StatusList>
      </CardHeader>

      <CardContent>
        <textarea
          placeholder="What made you feel that way?"
          value={text}
          ref={inputRef}
          onChange={handleTextChange}
        />
      </CardContent>

      <CardFooter>
        <CardDate>{currentNote.date}</CardDate>
        {isSaved && currentNote.savedAt ? (
          <CardDate saved>{`Saved on ${currentNote.savedAt}`}</CardDate>
        ) : null}

        {!isSaved && text ? (
          <Button onClick={handleSaveClick} status={status}>
            Save
          </Button>
        ) : null}
      </CardFooter>
    </CardContainer>
  );
}
