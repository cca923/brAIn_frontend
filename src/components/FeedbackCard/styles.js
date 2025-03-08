import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 700px;
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

export const FeedbackTitle = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const FeedbackText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.5;
  max-height: 100px;
  overflow-y: scroll;
`;
