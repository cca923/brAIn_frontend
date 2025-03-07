import { ButtonsContainer } from "./styles";

import SummarizationButton from "../Buttons/SummarizationButton";
import PastButton from "../Buttons/PastButton";
import QuizButton from "../Buttons/QuizButton";
import ChatButton from "../Buttons/ChatButton";

const ActionButtons = () => (
  <ButtonsContainer>
    <SummarizationButton />
    <PastButton />
    <QuizButton />
    <ChatButton />
  </ButtonsContainer>
);

export default ActionButtons;
