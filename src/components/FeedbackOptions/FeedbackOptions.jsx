import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onFeedback}) => {
    return (
        <div>
            {options.map((option) => (
                <button key={option} onClick={() => onFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFeedback: PropTypes.func.isRequired,
};

