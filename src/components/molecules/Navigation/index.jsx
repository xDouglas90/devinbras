import { NavLink } from '../../atoms';
import { Menu } from './styles';

export const Navigation = () => {
  return (
    <Menu>
      <NavLink isActive={true}>Início</NavLink>
      <NavLink isActive={false}>Produtos</NavLink>
      <NavLink isActive={false}>Sobre</NavLink>
      <NavLink isActive={false}>Contato</NavLink>
    </Menu>
  );
};
