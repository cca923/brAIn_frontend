import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";
import { handleLoadChat } from "../../../store/chat/service";

const ChatButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(handleLoadChat());
    navigate("/chat");
  };

  return (
    <ActionButton onClick={handleClick}>
      <span>🎤</span> AI Chat
    </ActionButton>
  );
};

export default ChatButton;
