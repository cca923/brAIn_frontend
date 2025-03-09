import styled from "styled-components";

export const FilesContainer = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
`;
