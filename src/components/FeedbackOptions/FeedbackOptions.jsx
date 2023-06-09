import {
  FeedbackList,
  FeedbackListItem,
  Button,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) => {
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
};

Feedback.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
