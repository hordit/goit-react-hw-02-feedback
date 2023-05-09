import PropTypes from 'prop-types';
import { Li, Ul } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <>
    <Ul>
      <Li>Good: {good}</Li>
      <Li>Neutral: {neutral}</Li>
      <Li>Bad: {bad}</Li>
      <Li>Total: {total}</Li>
      <Li>Positive feedback: {positiveFeedback}%</Li>
    </Ul>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
