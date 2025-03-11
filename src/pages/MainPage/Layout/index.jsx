import { LayoutContainer, MainContent, Sidebar } from "./styles";

const Layout = ({ sidebar, children }) => {
  return (
    <LayoutContainer>
      <Sidebar>{sidebar}</Sidebar>
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

export default Layout;
