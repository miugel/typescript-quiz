import React from 'react';
import QuestionCard from './components/QuestionCard';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple';

const App = () => {
  return (
    <>
      <h1>Geography Quiz</h1>
      <p>Test your knowledge of geography!</p>
      <button>Start</button>
    </>
  );
};

export default App;