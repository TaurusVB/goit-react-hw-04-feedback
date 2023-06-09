import React, { Component } from 'react';

import Feedback from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const options = ['Good', 'Neutral', 'Bad'];

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  leaveFeedback = evt => {
    const currentBtn = evt.target.name.toLowerCase();

    this.setState(prevState => {
      return { [currentBtn]: prevState[currentBtn] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {' '}
        <Section title={'Please leave feedback'}>
          <Feedback options={options} onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
