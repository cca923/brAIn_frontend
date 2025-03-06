import styled from "styled-components";

export const FolderListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};
`;

export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.dark};
`;

export const FolderItem = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-left: 4px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.primary : "transparent"};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white}50;
  }
`;

export const FolderName = styled.div`
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.dark};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
`;

export const RemoveButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.danger};
  opacity: 0;
  transition: opacity 0.2s;

  ${FolderItem}:hover & {
    opacity: 1;
  }
`;

export const AddFolderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.secondary}30;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}50;
  }
`;

export const AddFolderInput = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Button = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: bold;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
`;

export const ConfirmButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
