import { LayoutContainer } from "./styles";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <div className="logo-container">
        <img className="logo-img" src="public/images/logo.png" alt="logo" />
      </div>
      <div className="page">{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
