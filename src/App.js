import React from 'react';
import { Container } from './components/Container';
import NoteCard from './containers/NoteCard';
import NoteList from './containers/NoteList';
import NoteFooter from './containers/NoteFooter';
import { useFeelStatusState } from './providers/feel-status-context';

function App() {
  const { status } = useFeelStatusState();
  return (
    <Container status={status}>
      <div
        style={{
          flexGrow: 1,
          margin: '8.3rem auto 0 auto',
          width: '60%',
        }}
      >
        <NoteCard />
      </div>
      <div
        style={{
          // flexGrow: 1,
          // display: 'flex',
          margin: '2rem 1.5rem',
        }}
      >
        <NoteList />
      </div>

      <NoteFooter />
    </Container>
  );
}

export default App;
