import styled from "styled-components";

export const ItemContainer = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
  position: relative;

  .icon-status {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #fff;
    border-radius: 50%;
  }
`;
