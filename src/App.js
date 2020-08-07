import React from 'react';
import { animated, useTransition } from 'react-spring';
import { Container, GradientBg } from './components/Container';
import NoteCard from './containers/NoteCard';
import NoteList from './containers/NoteList';
import NoteFooter from './containers/NoteFooter';
import { useFeelStatusState } from './providers/feel-status-context';
import usePrevious from './lib/usePrevious';

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

  return (
    <Container>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props}>
            <GradientBg status={prevStatus} />
          </animated.div>
        ) : (
          <animated.div style={props}>
            <GradientBg status={status} />
          </animated.div>
        ),
      )}
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
