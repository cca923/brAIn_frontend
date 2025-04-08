import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
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
`;

export const ActionGroup = styled.div`
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;
