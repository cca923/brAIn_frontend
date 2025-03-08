import styled from "styled-components";

export const RecordPrompt = styled.div`
  flex: 1;
  min-height: 60px;
  max-height: 200px;
  overflow-y: scroll;
  line-height: 1.5;
  font-size: 16px;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin: 0 ${({ theme }) => theme.spacing.sm};
`;

export const RightButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  > button {
    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing.sm};
    }
  }
`;
