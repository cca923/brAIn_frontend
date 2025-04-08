import { LayoutContainer, MainContent, Sidebar } from "./styles";

const Layout = ({ children, leftSidebar, rightSidebar }) => {
  return (
    <LayoutContainer>
      {leftSidebar && <Sidebar>{leftSidebar}</Sidebar>}
      <MainContent>{children}</MainContent>
      {rightSidebar && <Sidebar>{rightSidebar}</Sidebar>}
    </LayoutContainer>
  );
};

export default Layout;
