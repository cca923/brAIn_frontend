import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Sidebar = styled.div`
  min-width: 300px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.light};
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const MainContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg};
`;
