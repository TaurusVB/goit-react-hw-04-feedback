import React, { Component } from 'react';
import {
  FeedbackList,
  FeedbackListItem,
  Button,
} from './FeedbackOptions.styled';

export default class Feedback extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <FeedbackList>
        {options.map(option => (
          <FeedbackListItem key={option}>
            <Button onClick={onLeaveFeedback} name={option}>
              {option}
            </Button>
          </FeedbackListItem>
        ))}
      </FeedbackList>
    );
  }
}
