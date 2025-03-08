import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";
import { folderSelector } from "../../../store/selectors";

const ChatButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedFolderId } = useSelector(folderSelector);

  const handleClick = async () => {
    // await dispatch(handleLoadQuizzes({ folderId: selectedFolderId }));
    navigate("/chat");
  };

  return (
    <ActionButton onClick={handleClick}>
      <span>🎤</span> AI Chat
    </ActionButton>
  );
};

export default ChatButton;
