import { useEffect, useState } from "react";
import classnames from "classnames";
import ReactMarkdown from "react-markdown";
import { IoMdArrowDropleft } from "react-icons/io";

import {
  Icon,
  PrimaryButton,
  RowButtonsContainer,
} from "../../../styles/common";

import { PanelContainer, ToggleButton } from "./styles";

const FeedbackPanel = ({ feedback, onEnd, onNewChat }) => {
  const [isActive, setIsActive] = useState(false);

  const togglePanel = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (!feedback) return;
    setIsActive(true);
  }, [feedback]);

  return (
    <PanelContainer
      className={classnames({ active: isActive, visible: feedback })}
    >
      <ToggleButton
        className={classnames({ active: isActive })}
        onClick={togglePanel}
      >
        <Icon>
          <IoMdArrowDropleft />
        </Icon>
      </ToggleButton>
      <h2>AI Feedback</h2>
      <div className="chat-feedback">
        <ReactMarkdown>{feedback}</ReactMarkdown>
      </div>
      <RowButtonsContainer width="80%" mt="auto">
        <PrimaryButton onClick={onEnd}>End Chat</PrimaryButton>
        <PrimaryButton onClick={onNewChat}>New AI Chat</PrimaryButton>
      </RowButtonsContainer>
    </PanelContainer>
  );
};

export default FeedbackPanel;
