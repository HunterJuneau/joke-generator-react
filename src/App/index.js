import React, { useState } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './App.scss';
import getRandomJoke from '../jokeData';

const App = () => {
  const [joke, setJoke] = useState({});
  const [punchline, setPunchline] = useState(true);

  const clickHandler = () => {
    if (punchline) {
      getRandomJoke().then((jokeObject) => setJoke(jokeObject));
      setPunchline(false);
    } else {
      setPunchline(true);
    }
  };

  return (
    <div className='App'>
      <Jumbotron>
        <h1 className='display-3'>Joke Generator</h1>
        <hr className='my-2' />
        <p className='lead'>
          <Button onClick={clickHandler} color='primary'>
            {punchline ? 'New Joke' : 'Tell Me!'}
          </Button>
        </p>
        {joke ? (
          <>
            <h5>{joke.setup}</h5>
            {punchline ? <h6>{joke.punchline}</h6> : ''}
          </>
        ) : (
          ''
        )}
      </Jumbotron>
    </div>
  );
};

export default App;
