import styled from "styled-components";

export const SuggestionContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  flex-direction: column;

  .info {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  .detail {
    line-height: 1.5;
  }

  > div {
    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }
  }
`;
