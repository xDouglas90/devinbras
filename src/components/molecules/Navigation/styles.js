import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
