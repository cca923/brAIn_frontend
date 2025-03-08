import styled from "styled-components";

import { Button } from "../../../styles/common";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultTitle = styled.h2`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const ResultScore = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  > span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FeedbackCard = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xxl} 0;
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
`;

export const NavigationContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing.md};
    }
  }
`;

export const NavButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
