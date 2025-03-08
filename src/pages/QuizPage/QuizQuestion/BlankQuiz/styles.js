import styled from "styled-components";

export const BlankContainer = styled.div`
  display: flex;
  flex-direction: column;

  .info {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  textarea {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    resize: none;
  }
`;

export const CorrectAnswer = styled.div`
  .info {
    color: ${({ theme }) => theme.colors.primary};
  }
  display: flex;
  flex-direction: column;
`;
