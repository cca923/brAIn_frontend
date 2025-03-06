import styled from "styled-components";

export const UploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const UploadButton = styled.button`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: background-color 0.2s;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray : `${theme.colors.primary}DD`};
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  margin-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

export const LoadingIndicator = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
  font-style: italic;
`;
