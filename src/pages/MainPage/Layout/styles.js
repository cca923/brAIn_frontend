import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Sidebar = styled.div`
  min-width: 300px;
  width: 300px;
`;

export const MainContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg};
`;
