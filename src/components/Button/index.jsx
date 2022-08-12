import PropTypes from 'prop-types';
import { Btn } from './styles';

export const Button = ({ type, children }) => {
  return <Btn type={type}> {children} </Btn>;
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  children: PropTypes.node.isRequired,
};
