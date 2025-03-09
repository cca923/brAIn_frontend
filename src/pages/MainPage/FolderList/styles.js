import styled from "styled-components";

import { Button } from "../../../styles/common";

export const FolderListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};

  .title {
    font-size: 24px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.dark};
  }

  .wrapper {
    max-height: calc(100vh - 220px);
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
`;

export const AddFolderButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary}50;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}50;
  }
`;

export const AddFolderInput = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};

  input {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
`;

export const ConfirmButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
