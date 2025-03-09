import SummarizationButton from "../../../containers/Buttons/SummarizationButton";
import PastButton from "../../../containers/Buttons/PastButton";
import QuizButton from "../../../containers/Buttons/QuizButton";
import ChatButton from "../../../containers/Buttons/ChatButton";

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
