import React from 'react';
import { animated, useTransition } from 'react-spring';
import {
  AppName,
  Container,
  NoteCardContainer,
  NoteListContainer,
  GradientBg,
} from '../../components/Container';
import NoteCard from '../../containers/NoteCard';
import NoteList from '../../containers/NoteList';
import NoteFooter from '../../containers/NoteFooter';
import usePrevious from '../../lib/usePrevious';
import { useFeelStatusState } from '../../providers/FeelStatusContext';
import useKeyboardControl from './hooks/useKeyboardControl';

function App() {
  const { status } = useFeelStatusState();
  const prevStatus = usePrevious(status);
  const [toggle, setToggle] = React.useState(false);

  const transitions = useTransition(toggle, null, {
    from: { opacity: 0, zIndex: -1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  React.useEffect(() => {
    setToggle(!toggle);
    // eslint-disable-next-line
  }, [status]);

  useKeyboardControl();

  return (
    <Container>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props} key={0}>
            <GradientBg status={prevStatus} />
          </animated.div>
        ) : (
          <animated.div style={props} key={1}>
            <GradientBg status={status} />
          </animated.div>
        ),
      )}
      <AppName>Simplejournal</AppName>
      <NoteCardContainer>
        <NoteCard />
      </NoteCardContainer>

      <NoteListContainer>
        <NoteList />
      </NoteListContainer>

      <NoteFooter />
    </Container>
  );
}

export default App;
