import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";
import { handleLoadQuizzes } from "../../../store/quiz/service";
import { folderSelector } from "../../../store/selectors";

const QuizButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedFolderId } = useSelector(folderSelector);

  const handleClick = async () => {
    await dispatch(handleLoadQuizzes({ folderId: selectedFolderId }));
    navigate("/quiz");
  };

  return (
    <ActionButton onClick={handleClick}>
      <span>📝</span> AI Quiz
    </ActionButton>
  );
};

export default QuizButton;
