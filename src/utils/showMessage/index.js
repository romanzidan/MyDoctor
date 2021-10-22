import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

const showError = (title, message) => {
  showMessage({
    message: title,
    description: message,
    type: 'default',
    backgroundColor: colors.error,
    color: colors.white,
  });
};

const showSuccess = (title, message) => {
  showMessage({
    message: title,
    description: message,
    type: 'default',
    backgroundColor: colors.success,
    color: colors.white,
  });
};

export {showError, showSuccess};
