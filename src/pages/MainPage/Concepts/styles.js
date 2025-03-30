import styled from "styled-components";

export const ConceptsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};);

  .title {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.dark};
  }

  .description {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;
