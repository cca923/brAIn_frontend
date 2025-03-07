import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavDot = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border: none;
  border-radius: 50%;
  margin: 0 ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: all 0.2s ease;

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &.correct {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &.wrong {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: ${({ theme }) => theme.colors.danger};
      opacity: 0.8;
    }
  }

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
