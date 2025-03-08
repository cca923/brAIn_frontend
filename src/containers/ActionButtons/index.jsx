import SummarizationButton from "../Buttons/SummarizationButton";
import PastButton from "../Buttons/PastButton";
import QuizButton from "../Buttons/QuizButton";
import ChatButton from "../Buttons/ChatButton";

import { ButtonsContainer } from "./styles";

const ActionButtons = () => (
  <ButtonsContainer>
    <SummarizationButton />
    <PastButton />
    <QuizButton />
    <ChatButton />
  </ButtonsContainer>
);

export default ActionButtons;
