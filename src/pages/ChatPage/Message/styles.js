import styled from "styled-components";

export const Avatar = styled.div`
  min-width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const MsgText = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  margin: 0 ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.5;
  word-break: break-all;
`;

export const MsgContainer = styled.div`
  max-width: 70%;
  display: flex;
  align-self: flex-start;

  &.user {
    align-self: flex-end;
    ${MsgText} {
      background-color: #e0ddff;
    }
  }
`;
