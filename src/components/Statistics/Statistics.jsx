import { FeedbackList, FeedbackListItem, Text } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
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
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
