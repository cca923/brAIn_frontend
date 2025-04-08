import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  position: relative;
`;

export const ProgressFill = styled.div`
  width: ${(props) => props.percentage}%;
  background: ${({ theme }) => theme.colors.secondary};
  height: 24px;
  transition: width 0.3s ease-in-out;
`;

export const ProgressText = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
