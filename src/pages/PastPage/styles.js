import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
`;

export const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 50px);
  padding: 0 80px;
`;

export const Title = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md}
    ${({ theme }) => theme.borderRadius.md} 0 0;

  div:nth-child(1) {
    width: 30%;
  }
  div:nth-child(2) {
    width: 25%;
  }
  div:nth-child(3) {
    width: 25%;
  }
  div:nth-child(4) {
    width: 20%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
`;
