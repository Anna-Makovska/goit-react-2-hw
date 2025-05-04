import { useState } from 'react'

import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
 const updateFeedback = (feedbackType) => {
   setFeedback((prevFeedback) => ({
     ...prevFeedback,
     [feedbackType]: prevFeedback[feedbackType] + 1,
   }));
 };  

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;  
  const resetFeedback = () => {
    setFeedback(
     { good: 0,
    neutral: 0,
    bad: 0,}
    )
  }


  return (
    <>
      <Description />

      <Options
        options={["Good", "Neutral", "Bad"]}
        onLeaveFeedback={updateFeedback}
        onResetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification message={"No feedback yet"} />
      ) : (
        <>
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
          />
          <p>Total:{totalFeedback}</p>
        </>
      )}
    </>
  );
}

export default App
