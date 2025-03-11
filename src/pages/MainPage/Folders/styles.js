import styled from "styled-components";

import { Button } from "../../../styles/common";

export const FoldersContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;

  .title {
    font-size: 24px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.dark};
  }

  .wrapper {
    flex: 1;
    overflow-y: scroll;
  }
  .action-groups {
    height: 120px;
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

export const AddFolderButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary}50;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}50;
  }
`;

export const AddFolderInput = styled.div`
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
