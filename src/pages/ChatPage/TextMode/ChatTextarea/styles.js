import styled from "styled-components";

export const Textarea = styled.textarea`
  flex: 1;
  resize: none;
  outline: none;
  min-height: 60px;
  max-height: 200px;
  overflow-y: auto;
  line-height: 1.5;
  font-size: 16px;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin: 0 ${({ theme }) => theme.spacing.sm};

  &[disabled] {
    cursor: not-allowed;
  }
`;
