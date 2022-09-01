import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--brand-green);
  padding: 24px 60px;
`;

export const CompanyName = styled.strong`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: var(--white);
`;

export const Menu = styled.nav`
  display: ${({ toggle }) => (toggle ? 'block' : 'none')};
  background-color: var(--brand-green);
  position: absolute;
  padding: 20px;
  top: 65px;
  right: 0;
  width: 200px;
  z-index: 9999;
  border-radius: 4px;
  box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.1);
`;
