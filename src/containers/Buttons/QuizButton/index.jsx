import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { MdOutlineQuiz } from "react-icons/md";

import ActionButton from "../../../components/ActionButton";
import { Icon } from "../../../styles/common";
import { handleLoadQuizzes } from "../../../store/quiz/service";

const QuizButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    await dispatch(handleLoadQuizzes());
    navigate("/quiz");
  };

  return (
    <ActionButton onClick={handleClick}>
      <Icon fontSize="20px" mr="5px">
        <MdOutlineQuiz />
      </Icon>
      AI Quiz
    </ActionButton>
  );
};

export default QuizButton;
