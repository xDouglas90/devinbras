import PropTypes from 'prop-types';
import { Link } from './styles';

export const NavLink = ({ isActive, children }) => {
  return <Link active={isActive}>{children}</Link>;
};

NavLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
