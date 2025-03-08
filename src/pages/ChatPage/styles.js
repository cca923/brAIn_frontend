import styled from "styled-components";

import { Button } from "../../styles/common";

export const PageContainer = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md}
    ${({ theme }) => theme.borderRadius.md};
`;
