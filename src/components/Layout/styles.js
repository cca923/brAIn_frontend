import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 1800px;
  min-width: 780px;
  min-height: 100vh;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .logo-container {
    display: flex;
    align-items: center;
    height: 60px;
    padding-left: ${({ theme }) => theme.spacing.md};
    background-color: #e0ddff;

    .logo-img {
      width: 100px;
    }
  }
  .page {
    height: calc(100vh - 60px);
  }
`;
