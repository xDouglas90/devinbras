import styled from 'styled-components';

export const HamburgerBtn = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const HamburgerLayer = styled.div`
  background: var(--white);
  height: 5px;
  margin: 6px 0;
  transition: 0.3s;
  width: 35px;
`;
