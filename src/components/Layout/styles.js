import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100vh;
`;

export const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const MainContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;
