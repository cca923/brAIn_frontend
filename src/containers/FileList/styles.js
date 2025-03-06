import styled from "styled-components";

export const FilesContainer = styled.div`
  height: 380px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const FileItem = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.light};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const NoFiles = styled.div`
  text-align: center;
  margin: auto;
  color: ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.spacing.lg};
`;
