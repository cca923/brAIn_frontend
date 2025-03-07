import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    width: 80px;
    padding: 12px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #e9e9e9;
    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: loading 1s infinite linear;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;
