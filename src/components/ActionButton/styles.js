import styled from "styled-components";

import { Button } from "../../styles/common";

export const ButtonContainer = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
