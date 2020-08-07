import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { FeelStatusProvider } from './providers/feel-status-context';
import { NotesProvider } from './providers/NotesContext';

import { GlobalStyle } from './style';
import { colors } from './theme';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ ...colors }}>
      <FeelStatusProvider>
        <NotesProvider>
          <GlobalStyle />
          <App />
        </NotesProvider>
      </FeelStatusProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
