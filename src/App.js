import './App.css';
import { useCallback, useState } from 'react';
import Feedback from './components/feedback';

function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const onBtnClick = useCallback(event => {
    const value = event.target.value;
    setFeedbacks(state => ({
      ...state, [value]: state[value] + 1
    }));
  }, []);

  return (
    <div className="App">
      <Feedback
        good={feedbacks.good}
        neutral={feedbacks.neutral}
        bad={feedbacks.bad}
        onBtnClick={onBtnClick}
      />
    </div>
  );
}

export default App;
