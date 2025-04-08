import styled from "styled-components";

export const QuizContainer = styled.div`
  padding: 0 100px;
  display: none;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  margin-bottom: 20px;
  gap: ${({ theme }) => theme.spacing.md};

  &.selected {
    display: flex;
  }
`;

export const QuizTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const QuizText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.5;
`;
