import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";
import { handleLoadChat } from "../../../store/chat/service";

const ChatButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
