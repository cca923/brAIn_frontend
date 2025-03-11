import styled from "styled-components";

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }

  input {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }

  &.correct {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
  &.wrong {
    color: ${({ theme }) => theme.colors.danger};
  }
`;
