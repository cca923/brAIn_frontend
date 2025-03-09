import styled from "styled-components";

import { Button } from "../../../styles/common";

export const ButtonContainer = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  max-width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;
