import scss from './Notification.module.scss';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div className={scss.text}>
    <p>{message}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;