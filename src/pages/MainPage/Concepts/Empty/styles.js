import styled from "styled-components";

export const EmptyContainer = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  white-space: pre-wrap;
  text-align: center;
  margin: auto;
  line-height: 1.2;

  .icons {
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;
