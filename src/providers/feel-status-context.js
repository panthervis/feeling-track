import React from 'react';
import { feelStatus } from '../utils/const';

const FeelStatusStateContext = React.createContext();
const FeelStatusDispatchContext = React.createContext();

function feelStatusReducer(state, action) {
  switch (action.type) {
    case 'set': {
      return { status: action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FeelStatusProvider({ children }) {
  const [state, dispatch] = React.useReducer(feelStatusReducer, {
    status: feelStatus.DEFAULT,
  });
  return (
    <FeelStatusStateContext.Provider value={state}>
      <FeelStatusDispatchContext.Provider value={dispatch}>
        {children}
      </FeelStatusDispatchContext.Provider>
    </FeelStatusStateContext.Provider>
  );
}

function useFeelStatusState() {
  const context = React.useContext(FeelStatusStateContext);
  if (context === undefined) {
    throw new Error(
      'useFeelStatusState must be used within a FeelStatusProvider',
    );
  }
  return context;
}

function useFeelStatusDispatch() {
  const context = React.useContext(FeelStatusDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useFeelStatusDispatch must be used within a FeelStatusProvider',
    );
  }
  return context;
}

export { FeelStatusProvider, useFeelStatusState, useFeelStatusDispatch };
