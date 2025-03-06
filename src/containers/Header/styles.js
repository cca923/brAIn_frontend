import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h1`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.dark};
  max-width: calc(100vw - 347px);
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
`;
