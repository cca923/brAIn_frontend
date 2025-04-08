import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import ActionButton from "../../../components/ActionButton";
import { Icon } from "../../../styles/common";
import { fileSelector } from "../../../store/selectors";
import { handleStartChat } from "../../../store/chat/service";

const ChatButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { files } = useSelector(fileSelector);
  const disabled = files?.length === 0;

  const handleClick = () => {
    if (disabled) return;
    // No need to await, chat page has loading ui
    dispatch(handleStartChat());
    navigate("/chat");
  };

  return (
    <ActionButton onClick={handleClick} disabled={disabled}>
      <Icon fontSize="20px" mr="5px">
        <IoChatboxEllipsesOutline />
      </Icon>
      AI Chat
    </ActionButton>
  );
};

export default ChatButton;
