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
`;

export const ActionGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const TextInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  min-height: 100px;
  resize: vertical;
`;
