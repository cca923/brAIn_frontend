import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { MdOutlineQuiz } from "react-icons/md";

import ActionButton from "../../../components/ActionButton";
import { Icon } from "../../../styles/common";
import { fileSelector } from "../../../store/selectors";
import { handleLoadQuizzes } from "../../../store/quiz/service";

const QuizButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { files } = useSelector(fileSelector);
  const disabled = files?.length === 0;

  const handleClick = async () => {
    if (disabled) return;
    await dispatch(handleLoadQuizzes());
    navigate("/quiz");
  };

  return (
    <ActionButton onClick={handleClick} disabled={disabled}>
      <Icon fontSize="20px" mr="5px">
        <MdOutlineQuiz />
      </Icon>
      AI Quiz
    </ActionButton>
  );
};

export default QuizButton;
