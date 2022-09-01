import PropTypes from 'prop-types';
import { Btn } from './styles';

export const Button = ({ styleType, children }) => {
  return <Btn styleType={styleType}> {children} </Btn>;
};

Button.propTypes = {
  styleType: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  children: PropTypes.node.isRequired,
};
