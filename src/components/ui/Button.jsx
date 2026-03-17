'use client';

import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ $size }) =>
        $size === 'sm' ? '0.5rem 1rem' :
            $size === 'lg' ? '1rem 2rem' :
                '0.75rem 1.5rem'};
  font-size: ${({ $size }) =>
        $size === 'sm' ? '0.8rem' :
            $size === 'lg' ? '1.1rem' :
                '0.95rem'};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all ${({ theme }) => theme.transitions.normal};
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  ${({ $variant, theme }) => {
        switch ($variant) {
            case 'secondary':
                return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.textOnPrimary};
            transform: translateY(-2px);
            box-shadow: 0 4px 15px ${theme.colors.shadow};
          }
        `;
            case 'outline':
                return `
          background: transparent;
          color: ${theme.colors.text};
          border: 2px solid ${theme.colors.border};
          &:hover {
            border-color: ${theme.colors.primary};
            color: ${theme.colors.primary};
          }
        `;
            case 'ghost':
                return `
          background: transparent;
          color: ${theme.colors.text};
          &:hover {
            background: ${theme.colors.accent};
          }
        `;
            default: // primary
                return `
          background: ${theme.colors.primaryGradient};
          color: ${theme.colors.textOnPrimary};
          border: none;
          box-shadow: 0 2px 10px ${theme.colors.shadow};
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px ${theme.colors.shadowMedium};
          }
          &:active {
            transform: translateY(0);
          }
        `;
        }
    }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

export default function Button({ children, variant = 'primary', size = 'md', ...props }) {
    return (
        <StyledButton $variant={variant} $size={size} {...props}>
            {children}
        </StyledButton>
    );
}
