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
} from '../../providers/feel-status-context';

export default function NoteCard() {
  const { status } = useFeelStatusState();
  const dispatch = useFeelStatusDispatch();

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
              onClick={() =>
                dispatch({
                  type: 'set',
                  payload: v,
                })
              }
            >
              {v}
            </StatusBadge>
          ))}
          <StatusText>Amazing</StatusText>
        </StatusList>
      </CardHeader>

      <CardContent>
        <textarea placeholder="What made you feel that way?" />
      </CardContent>

      <CardFooter>
        <CardDate>Jul 23</CardDate>
        <Button>Save</Button>
      </CardFooter>
    </CardContainer>
  );
}
