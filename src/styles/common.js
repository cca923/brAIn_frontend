import styled from "styled-components";

export const Button = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;
