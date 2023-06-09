import React, { Component } from 'react';
import { FeedbackList, FeedbackListItem, Text } from './Statistics.styled';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <FeedbackList>
        <FeedbackListItem>
          <Text>Good: {good}</Text>
        </FeedbackListItem>
        <FeedbackListItem>
          <Text>Neutral: {neutral}</Text>
        </FeedbackListItem>
        <FeedbackListItem>
          <Text>Bad: {bad}</Text>
        </FeedbackListItem>
        <FeedbackListItem>
          <Text>Total: {total}</Text>
        </FeedbackListItem>
        <FeedbackListItem>
          <Text>Positive feedback: {positivePercentage}%</Text>
        </FeedbackListItem>
      </FeedbackList>
    );
  }
}
