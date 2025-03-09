import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";
import { handleLoadQuizzes } from "../../../store/quiz/service";

const QuizButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(handleLoadQuizzes());
    navigate("/quiz");
  };

  return (
    <ActionButton onClick={handleClick}>
      <span>📝</span> AI Quiz
    </ActionButton>
  );
};

export default QuizButton;
