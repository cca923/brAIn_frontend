import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";
import { folderSelector } from "../../../store/selectors";

const SummarizationButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedFolderId } = useSelector(folderSelector);

  const handleClick = async () => {
    // await dispatch(handleLoadQuizzes({ folderId: selectedFolderId }));
    navigate("/summarization");
  };

  return (
    <ActionButton onClick={handleClick}>
      <span>🔍</span> View Summarization
    </ActionButton>
  );
};

export default SummarizationButton;
