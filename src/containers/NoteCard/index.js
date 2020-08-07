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

export default function NoteCard() {
  return (
    <CardContainer>
      <CardHeader>
        <h1>How are you feeling today?</h1>

        <StatusList>
          <StatusText>Awful</StatusText>
          {[1, 2, 3, 4, 5].map((v) => (
            <StatusBadge key={v} status={v}>
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
