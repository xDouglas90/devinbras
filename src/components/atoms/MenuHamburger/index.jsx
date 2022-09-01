import { HamburgerBtn, HamburgerLayer } from './styles';
import PropTypes from 'prop-types';

export const MenuHamburger = ({ handleClick }) => {
  return (
    <HamburgerBtn onClick={handleClick}>
      <HamburgerLayer />
      <HamburgerLayer />
      <HamburgerLayer />
    </HamburgerBtn>
  );
};

MenuHamburger.propTypes = {
  handleClick: PropTypes.func,
};
