import { SuggestionContainer } from "./styles";

const Suggestion = ({ feedback, keyConcepts }) => {
  return (
    <SuggestionContainer>
      {feedback && (
        <div>
          <div className="info">Feedback:</div>
          <div className="detail">{feedback}</div>
        </div>
      )}
      {keyConcepts && (
        <div>
          <div className="info">Key Concepts:</div>
          <div className="detail">{keyConcepts}</div>
        </div>
      )}
    </SuggestionContainer>
  );
};

export default Suggestion;
