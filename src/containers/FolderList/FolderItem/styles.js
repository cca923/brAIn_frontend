import styled from "styled-components";

export const FolderItemContainer = styled.div`
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
    background-color: ${({ theme }) => theme.colors.white}30;
  }
`;

export const FolderName = styled.div`
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.dark};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const RemoveButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.danger};
  opacity: 0;
  transition: opacity 0.2s;
  margin-left: ${({ theme }) => theme.spacing.sm};

  ${FolderItemContainer}:hover & {
    opacity: 1;
  }
`;
