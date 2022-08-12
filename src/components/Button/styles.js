import styled from 'styled-components';

import colors from '../../styles/colors.js';

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background: ${({ type }) =>
    type === 'primary' ? colors.brandGreen : colors.white};
  border: 1px solid ${colors.brandGreen};
  border-radius: 40px;
  color: ${({ type }) =>
    type === 'primary' ? colors.white : colors.brandGreen};
  font-size: 14px;
  font-weight: 700;
  padding: 16px 32px;
  text-transform: uppercase;

  &:hover {
    background: ${({ type }) =>
      type === 'primary' ? colors.brandGreenHover : colors.brandGreen};
    border: 1px solid
      ${({ type }) =>
        type === 'primary' ? colors.brandGreenHover : colors.brandGreen};
    color: ${colors.white};
  }
`;
