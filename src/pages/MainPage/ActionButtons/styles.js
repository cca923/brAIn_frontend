import styled from "styled-components";

import { Button } from "../../../styles/common";

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 0 150px;
`;
