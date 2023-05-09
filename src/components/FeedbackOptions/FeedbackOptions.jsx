import PropTypes from 'prop-types';
import { Button, Div } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <Div>
      {options.map(option => (
        <Button key={option} type={option} onClick={() => onFeedback(option)}>
          {option}
        </Button>
      ))}
    </Div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedback: PropTypes.func.isRequired,
};
