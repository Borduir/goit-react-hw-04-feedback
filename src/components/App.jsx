import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const currentButtonName = event.target.name;
    if (currentButtonName === 'good') {
      setGood(good + 1);
    } else if (currentButtonName === 'neutral') {
      setNeutral(neutral + 1);
    } else if (currentButtonName === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return neutral + good + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * good) / (neutral + good + bad));
  };

  const options = ['neutral', 'good', 'bad'];
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
}
