import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
`;

export const Summary = styled.div`
  line-height: 1.5;
  flex: 1;
  padding: 0 100px 40px;
  white-space: pre-wrap;
`;

export const Alert = styled.h2`
  color: ${({ theme }) => theme.colors.danger};
  text-align: center;
`;
