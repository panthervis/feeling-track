import React from 'react';
import { GlobalStyle } from './style';
import { colors } from './theme';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/Container';
import Footer from './components/Footer';
import NoteCard from './containers/NoteCard';
import NoteList from './containers/NoteList';

function App() {
  return (
    <ThemeProvider theme={{ ...colors }}>
      <GlobalStyle />

      <Container status={5}>
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
    </ThemeProvider>
  );
}

export default App;
