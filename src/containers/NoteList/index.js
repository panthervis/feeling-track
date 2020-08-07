import React from 'react';
import { Container } from './styled';
import ListItem from '../../components/ListItem';

export default function NoteList() {
  return (
    <Container>
      <ListItem
        status={1}
        date="July 20"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />

      <ListItem
        status={2}
        date="July 21"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />

      <ListItem
        status={3}
        date="July 22"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />

      <ListItem
        status={4}
        date="July 23"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />

      <ListItem
        status={5}
        date="July 24"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />

      <ListItem status={0} date="Today" content="" />
    </Container>
  );
}
