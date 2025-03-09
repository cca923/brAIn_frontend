import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light}70;
  }

  div:nth-child(1) {
    width: 30%;
  }
  div:nth-child(2) {
    width: 25%;
  }
  div:nth-child(3) {
    width: 25%;
  }
  div:nth-child(4) {
    width: 20%;
  }
`;

export const ItemText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ItemDetails = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
`;
