import styled from "styled-components";

import { Button } from "../../../../styles/common";

export const UploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const UploadButton = styled(Button)`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : `${theme.colors.secondary}50`};
  color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.white : theme.colors.primary};
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
      disabled ? theme.colors.gray : `${theme.colors.secondary}50`};
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;
