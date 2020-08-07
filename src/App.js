import React from 'react';
import { GlobalStyle } from './style';
import { colors } from './theme';
import { ThemeProvider } from 'styled-components';
import StatusBadge from './components/StatusBadge';
import { Button } from './components/Button';
import { Container } from './components/Container';
import ListItem from './components/ListItem';

function App() {
  return (
    <ThemeProvider theme={{ ...colors }}>
      <GlobalStyle />

      <Container status={5}>
        <StatusBadge>0</StatusBadge>
        <StatusBadge status={1} selected>
          1
        </StatusBadge>
        <StatusBadge status={2}>2</StatusBadge>
        <StatusBadge status={3}>3</StatusBadge>
        <StatusBadge status={4}>4</StatusBadge>
        <StatusBadge status={5}>5</StatusBadge>

        <ListItem
          status={3}
          date="July 20"
          content="Lorem ipsum slwodja sjdjwkfkdjals kdj"
        />
        <Button status={5}>Save</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
