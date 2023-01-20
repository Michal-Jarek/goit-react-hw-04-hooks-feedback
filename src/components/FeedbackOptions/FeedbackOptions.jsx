import scss from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={scss.container}>
    {options.map((option, index) => (
      <button
        key={index}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        className={scss.button}
      >
        {option.substring(0, 1).toUpperCase() + option.substring(1)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  children: PropTypes.func,
};

export default FeedbackOptions;
