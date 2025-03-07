import styled from "styled-components";
import { Button } from "../../../styles/common";

export const NavigationContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  > button {
    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing.md};
    }
  }
`;

export const NavButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;
