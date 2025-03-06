import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.dark};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
