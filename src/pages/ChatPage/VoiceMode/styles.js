import styled from "styled-components";
import { variant } from "styled-system";

import { Button } from "../../../styles/common";
import CommonButton from "../CommonButton";

export const RecordButton = styled(CommonButton)`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  ${({ theme }) =>
    variant({
      prop: "type",
      variants: {
        default: {
          backgroundColor: theme.colors.gray,
        },
        danger: {
          backgroundColor: theme.colors.danger,
          animation: "pulse 1s infinite ease-in-out",
        },
      },
    })}
`;

export const RecordPrompt = styled.div`
  flex: 1;
  min-height: 60px;
  max-height: 200px;
  overflow-y: scroll;
  line-height: 1.5;
  font-size: 16px;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin: 0 ${({ theme }) => theme.spacing.sm};
`;

export const RightButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  > button {
    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing.sm};
    }
  }
`;
