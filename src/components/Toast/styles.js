import styled from "styled-components";
import { variant } from "styled-system";

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
`;

export const ItemContainer = styled.div`
  min-width: 250px;
  display: flex;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  animation: fadeIn 0.5s ease-in;

  ${({ theme }) =>
    variant({
      prop: "type",
      variants: {
        success: {
          backgroundColor: theme.colors.success,
        },
        error: {
          backgroundColor: theme.colors.danger,
        },
        info: {
          backgroundColor: theme.colors.secondary,
        },
      },
    })}

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
