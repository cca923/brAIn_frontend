import FeedbackCard from "../../../components/FeedbackCard";
import { PrimaryButton, RowButtonsContainer } from "../../../styles/common";

import { EndChatContainer } from "./styles";

const EndChat = ({ feedback, onEnd, onNewChat }) => (
  <EndChatContainer>
    <FeedbackCard feedback={feedback} />
    <RowButtonsContainer width="50%">
      <PrimaryButton onClick={onEnd}>End Chat</PrimaryButton>
      <PrimaryButton onClick={onNewChat}>New AI Chat</PrimaryButton>
    </RowButtonsContainer>
  </EndChatContainer>
);
export default EndChat;
