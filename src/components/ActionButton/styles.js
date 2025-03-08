import styled from "styled-components";

import { Button } from "../../styles/common";

export const ButtonContainer = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
