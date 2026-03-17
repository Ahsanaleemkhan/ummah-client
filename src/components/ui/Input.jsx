'use client';

import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  ${({ $error, theme }) => $error && `
    border-color: ${theme.colors.error};
    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.error}20;
    }
  `}
`;

const ErrorText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.error};
`;

export default function Input({ label, error, id, ...props }) {
    return (
        <InputWrapper>
            {label && <Label htmlFor={id}>{label}</Label>}
            <StyledInput id={id} $error={!!error} {...props} />
            {error && <ErrorText>{error}</ErrorText>}
        </InputWrapper>
    );
}
