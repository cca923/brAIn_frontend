import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";

const PastButton = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    // await dispatch(handleLoadQuizzes());
    navigate("/past");
  };

  return (
    <ActionButton onClick={handleClick}>
      <span>📚</span> Past Learning
    </ActionButton>
  );
};

export default PastButton;
