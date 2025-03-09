import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaMicrophone, FaStop, FaPaperPlane } from "react-icons/fa";
import { BsKeyboard } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { scrollToBottom } from "../../utils/scroll";
import { MSG_TYPE } from "../../constants";
import { handleLoadChat } from "../../store/chat/service";
import { resetChat } from "../../store/chat/slice";
import { chatSelector } from "../../store/selectors";
import FeedbackCard from "../../components/FeedbackCard";
import useChatMode from "../../hooks/useChatMode";

import {
  PageContainer,
  Card,
  MessagesContainer,
  InputContainer,
} from "./styles";
import Message from "./Message";
import TextMode from "./TextMode";
import VoiceMode from "./VoiceMode";
import EndChat from "./EndChat";

const ChatPage = () => {
  const dispatch = useDispatch();
  const {
    chatInputRef,
    inputMessage,
    isRecording,
    isVoiceMode,
    transcript,
    textToVoiceMode,
    voiceToTextMode,
    onInputChange,
    toggleRecording,
    onSend,
    onKeyPress,
  } = useChatMode();
  const navigate = useNavigate();

  const messagesEndRef = useRef(null);

  const { messages, loadingMap, feedback } = useSelector(chatSelector);

  const handleEndChat = () => {
    dispatch(resetChat());
    navigate("/");
  };

  useEffect(() => {
    if (messages && messagesEndRef?.current) {
      scrollToBottom(messagesEndRef?.current);
    }
  }, [messages]);

  const handleNewChat = () => {
    dispatch(resetChat());
    dispatch(handleLoadChat());
  };

  const renderInput = () => {
    if (feedback) {
      return (
        <EndChat
          feedback={feedback}
          onEnd={handleEndChat}
          onNewChat={handleNewChat}
        />
      );
    }
    if (isVoiceMode) {
      return (
        <VoiceMode
          voiceToTextMode={voiceToTextMode}
          isRecording={isRecording}
          toggleRecording={toggleRecording}
          onSend={onSend}
          transcript={transcript}
        />
      );
    }

    return (
      <TextMode
        textToVoiceMode={textToVoiceMode}
        chatInputRef={chatInputRef}
        inputMessage={inputMessage}
        onInputChange={onInputChange}
        onKeyPress={onKeyPress}
        onSend={onSend}
      />
    );
  };

  return (
    <PageContainer>
      <Card>
        <MessagesContainer ref={messagesEndRef}>
          {messages?.map((msg, index) => (
            <Message key={index} {...msg} />
          ))}
          {loadingMap?.sendMessage && (
            <Message type={MSG_TYPE.SERVER} message="Typing..." />
          )}
        </MessagesContainer>

        <InputContainer>{renderInput()}</InputContainer>
      </Card>
    </PageContainer>
  );
};

export default ChatPage;
