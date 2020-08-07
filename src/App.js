import React from 'react';
import { Container } from './components/Container';
import Footer from './components/Footer';
import NoteCard from './containers/NoteCard';
import NoteList from './containers/NoteList';
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
          flexGrow: 0,
          margin: '2rem 1.5rem',
        }}
      >
        <NoteList />
      </div>
      <div
        style={{
          flexGrow: 0,
          flexShrink: 0,
          flexBasis: '70px',
        }}
      >
        <Footer>July 20</Footer>
      </div>
    </Container>
  );
}

export default App;
