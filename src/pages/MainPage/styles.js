import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;
