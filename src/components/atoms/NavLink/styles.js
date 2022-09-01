import styled from 'styled-components';

export const Link = styled.li`
  border-bottom: ${({ active }) => (active ? '2px solid var(--brand-green-lt2)' : 'none')};
  font-size: 16px;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  line-height: 21px;
  color: var(--brand-green-lt2);
  opacity: ${({ active }) => (active ? '1' : '0.6')};
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  text-underline-offset: ${({ active }) => active && '4px'};

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
