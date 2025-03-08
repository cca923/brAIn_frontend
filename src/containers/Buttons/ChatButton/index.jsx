// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";

const ChatButton = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleClick = async () => {
    // await dispatch(handleLoadQuizzes());
    navigate("/chat");
  };

  return (
    <ActionButton onClick={handleClick}>
      <span>🎤</span> AI Chat
    </ActionButton>
  );
};

export default ChatButton;
