import styled from "styled-components";

import { PrimaryButton } from "../../../styles/common";

export const NavButton = styled(PrimaryButton)`
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
