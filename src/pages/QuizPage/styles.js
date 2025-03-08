import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
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
`;

export const ActionGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const TextInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  min-height: 100px;
  resize: vertical;
`;

// // Chat Components
// export const ChatContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 600px;
// `;

// export const MessagesContainer = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   padding: ${({ theme }) => theme.spacing.md};
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing.md};
// `;

// export const Message = styled.div`
//   max-width: 70%;
//   padding: ${({ theme }) => theme.spacing.md};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   background-color: ${({ isUser, theme }) =>
//     isUser ? theme.colors.primary : theme.colors.light};
//   color: ${({ isUser, theme }) =>
//     isUser ? theme.colors.white : theme.colors.dark};
//   align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
//   position: relative;
// `;

// export const MessageText = styled.p`
//   margin: 0;
//   line-height: 1.5;
// `;

// export const InputContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding: ${({ theme }) => theme.spacing.md};
//   border-top: 1px solid ${({ theme }) => theme.colors.light};
// `;

// export const ChatInput = styled.input`
//   flex: 1;
//   padding: ${({ theme }) => theme.spacing.md};
//   border: 1px solid ${({ theme }) => theme.colors.gray};
//   border-radius: ${({ theme }) => theme.borderRadius.sm};
//   font-size: 16px;
//   margin-right: ${({ theme }) => theme.spacing.sm};
// `;

// export const RecordButton = styled(Button)`
//   background-color: ${({ isRecording, theme }) =>
//     isRecording ? theme.colors.danger : theme.colors.primary};
//   border-radius: 50%;
//   width: 48px;
//   height: 48px;
//   min-width: unset;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: ${({ theme }) => theme.spacing.sm};
// `;

// export const Icon = styled.span`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 20px;
// `;

// export const Avatar = styled.div`
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.colors.gray};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: ${({ theme }) => theme.colors.white};
//   font-size: 16px;
//   margin-right: ${({ theme }) => theme.spacing.sm};
// `;

// export const RecordPrompt = styled.div`
//   padding: ${({ theme }) => theme.spacing.lg};
//   background-color: ${({ theme }) => theme.colors.light};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   text-align: center;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.secondary};
//     color: ${({ theme }) => theme.colors.white};
//   }
// `;
