// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";

const SummarizationButton = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    // await dispatch(handleLoadQuizzes());
    navigate("/summarization");
  };

  return (
    <ActionButton onClick={handleClick}>
      <span>🔍</span> View Summarization
    </ActionButton>
  );
};

export default SummarizationButton;
