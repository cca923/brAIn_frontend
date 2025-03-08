import styled from "styled-components";
import { layout, space } from "styled-system";

export const Button = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.danger};
  opacity: 0;
  transition: opacity 0.2s;
`;

export const RowButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${layout};
  ${space};

  > button {
    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing.md};
    }
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
