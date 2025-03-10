import classnames from "classnames";
import { FaRegUser, FaRobot } from "react-icons/fa6";

import { MSG_TYPE } from "../../../constants";
import { Icon } from "../../../styles/common";

import { MsgContainer, Avatar, MsgText } from "./styles";

const Message = ({ type, message = "" }) => {
  const isUser = type === MSG_TYPE.USER;

  if (isUser) {
    return (
      <MsgContainer className={classnames({ user: isUser })}>
        <MsgText>{message}</MsgText>
        <Avatar>
          <Icon>
            <FaRegUser />
          </Icon>
        </Avatar>
      </MsgContainer>
    );
  }

  return (
    <MsgContainer>
      <Avatar>
        <Icon>
          <FaRobot />
        </Icon>
      </Avatar>
      <MsgText>{message}</MsgText>
    </MsgContainer>
  );
};

export default Message;
