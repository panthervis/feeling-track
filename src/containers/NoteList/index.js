import React from 'react';
import { FixedSizeList as List, areEqual } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { Container, ListOuterElement } from './styled';
import ListItem from './ListItem';
import { useNotesState } from '../../providers/NotesContext';

const GUTTER_SIZE = 16;

function handleOnWheel(e) {
  const el = document.getElementById('outerElement');
  if (el) {
    el.scrollTo({
      left: el.scrollLeft + e.deltaY * 50,
      behavior: 'smooth',
    });
  }
}
const innerElementType = React.forwardRef(({ style, ...rest }, ref) => (
  <div
    id="innerElement"
    style={{
      ...style,
      paddingLeft: GUTTER_SIZE,
      paddingRight: GUTTER_SIZE,
    }}
    ref={ref}
    {...rest}
  />
));

const outerElementType = React.forwardRef(({ style, ...rest }, ref) => (
  <ListOuterElement
    id="outerElement"
    style={{ ...style, overflowY: 'hidden' }}
    onWheel={handleOnWheel}
    ref={ref}
    {...rest}
  />
));

export default function NoteList() {
  const { notes } = useNotesState();

  const Column = React.memo(
    (props) => {
      const { index, style } = props;
      const note = notes[index];
      return (
        <ListItem
          index={index}
          status={note.status}
          date={note.date}
          content={note.text}
          style={{
            ...style,
            left: style.left + GUTTER_SIZE,
            width: style.width - GUTTER_SIZE,
            height: style.height - GUTTER_SIZE,
          }}
        />
      );
    },

    areEqual,
  );

  return (
    <Container>
      <AutoSizer disableHeight>
        {({ width }) => (
          <List
            height={140}
            itemCount={notes.length}
            width={width}
            itemSize={206}
            innerElementType={innerElementType}
            outerElementType={outerElementType}
            layout="horizontal"
          >
            {Column}
          </List>
        )}
      </AutoSizer>

      {/* <ContainerHover /> */}
    </Container>
  );
}
