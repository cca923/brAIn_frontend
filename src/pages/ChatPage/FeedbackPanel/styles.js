import styled from "styled-components";

import ActionButton from "../../../components/ActionButton";

export const PanelContainer = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.8s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.xxl};
  opacity: 0;

  .chat-feedback {
    width: 100%;
    flex: 1;
    margin: ${({ theme }) => theme.spacing.lg} 0;
    overflow-y: scroll;
    word-break: break-all;
    line-height: 1.5;
  }

  &.visible {
    opacity: 1;
  }
  &.active {
    transform: translateX(0);
  }
`;

export const ToggleButton = styled(ActionButton)`
  transition: transform 0.3s ease-in-out;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 20px;
  left: -50px;

  &.active {
    transform: rotate(180deg);
  }
`;
