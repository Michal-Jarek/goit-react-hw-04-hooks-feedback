import { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  // ************************** Methods ********************************

  handleIncrement = evt => {
    const { name } = evt.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = (option1, option2, option3) => {
    return option1 + option2 + option3;
  };

  countPositiveFeedbackPercentage = (positive, total) => {
    return total > 0
      ? `${Number(Math.round((positive / total) * 100 + 'e+2') + 'e-2')}%`
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    let total = this.countTotalFeedback(good, neutral, bad);
    let percentage = this.countPositiveFeedbackPercentage(good, total);

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
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics" >
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
  }
}
