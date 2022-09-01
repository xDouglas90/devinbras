import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background: ${({ styleType }) =>
    styleType === 'primary' ? 'var(--brand-green)' : 'transparent'};
  border: 1px solid
    ${({ styleType }) =>
      styleType === 'primary' ? 'var(--white)' : 'var(--white)'};
  border-radius: 40px;
  color: ${({ styleType }) =>
    styleType === 'primary' ? 'var(--white)' : 'var(--white)'};
  font-size: 14px;
  font-weight: 700;
  padding: 16px 32px;
  text-transform: uppercase;

  &:hover {
    background: ${({ styleType }) =>
      styleType === 'primary'
        ? 'var(--brand-green-hover)'
        : 'var(--brand-green)'};
    border: 1px solid
      ${({ styleType }) =>
        styleType === 'primary' ? 'var(--brand-green-hover)' : 'var(--white)'};
    color: var(--white);
  }
`;
