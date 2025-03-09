import SummaryButton from "../../../containers/Buttons/SummaryButton";
import PastButton from "../../../containers/Buttons/PastButton";
import QuizButton from "../../../containers/Buttons/QuizButton";
import ChatButton from "../../../containers/Buttons/ChatButton";

import { ButtonsContainer } from "./styles";

const ActionButtons = () => (
  <ButtonsContainer>
    <SummaryButton />
    <PastButton />
    <QuizButton />
    <ChatButton />
  </ButtonsContainer>
);

export default ActionButtons;
