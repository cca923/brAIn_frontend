import styled from "styled-components";
import { RemoveButton } from "../../../../styles/common";

export const FileItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.light};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const FileName = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const RemoveBtn = styled(RemoveButton)`
  margin-left: ${({ theme }) => theme.spacing.sm};

  ${FileItemContainer}:hover & {
    opacity: 1;
  }
`;
