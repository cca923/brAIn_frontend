import { CardContainer, FeedbackTitle, FeedbackText } from "./styles";

const FeedbackCard = ({ feedback = "" }) => {
  return (
    <CardContainer>
      <FeedbackTitle>AI Feedback</FeedbackTitle>
      <FeedbackText>{feedback}</FeedbackText>
    </CardContainer>
  );
};

export default FeedbackCard;
