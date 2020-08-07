import React from 'react';
import { GlobalStyle } from './style';
import { colors } from './theme';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/Container';
import NoteCard from './containers/NoteCard';

function App() {
  return (
    <ThemeProvider theme={{ ...colors }}>
      <GlobalStyle />

      <Container status={5}>
        <NoteCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
