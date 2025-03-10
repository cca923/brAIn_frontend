import styled from "styled-components";

import { Button } from "../../../styles/common";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
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
