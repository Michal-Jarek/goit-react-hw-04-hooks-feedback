import { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // ************************** Methods ********************************

  const handleIncrement = evt => {
    const { name } = evt.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Błąd: wybrano z poza zakresu.');
    }
  };

  const countTotalFeedback = (option1, option2, option3) => {
    return option1 + option2 + option3;
  };

  const countPositiveFeedbackPercentage = (positive, total) => {
    return total > 0
      ? `${Number(Math.round((positive / total) * 100 + 'e+2') + 'e-2')}%`
      : 0;
  };

  const keys = ['good', 'neutral', 'bad'];
  let total = countTotalFeedback(good, neutral, bad);
  let percentage = countPositiveFeedbackPercentage(good, total);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
        marginLeft: 20,
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};
