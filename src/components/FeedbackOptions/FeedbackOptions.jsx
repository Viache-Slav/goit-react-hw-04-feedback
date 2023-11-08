import css from 'components/FeedbackOptions/FeedbackOptions.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button 
      className={css.button}
      key={option} 
      onClick={() => onLeaveFeedback(option)}
      type="button"
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
