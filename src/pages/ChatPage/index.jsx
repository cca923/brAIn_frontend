import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaMicrophone, FaStop, FaPaperPlane } from "react-icons/fa";
import { BsKeyboard } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { scrollToBottom } from "../../utils/scroll";
import { MSG_TYPE } from "../../constants";
import useChatMode from "../../hooks/useChatMode";
import { handleStartChat } from "../../store/chat/service";
import { resetChat } from "../../store/chat/slice";
import { chatSelector } from "../../store/selectors";
import { handleLoadFolders } from "../../store/folders/service";
import FeedbackCard from "../../components/FeedbackCard";
import Header from "../../containers/Header";

import {
  PageContainer,
  Card,
  MessagesContainer,
  InputContainer,
} from "./styles";
import Message from "./Message";
import TextMode from "./TextMode";
import VoiceMode from "./VoiceMode";
import FeedbackPanel from "./FeedbackPanel";

const ChatPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const messagesEndRef = useRef(null);
  const { messages, loadingMap, feedback } = useSelector(chatSelector);
  const isLoading = loadingMap?.startChat || loadingMap?.sendMessage;

  const handleEndChat = () => {
    dispatch(resetChat());
    navigate("/");
    dispatch(handleLoadFolders());
  };

  const handleNewChat = () => {
    dispatch(resetChat());
    dispatch(handleStartChat());
  };

  const renderInput = () => {
    if (isVoiceMode) {
      return (
        <VoiceMode
          voiceToTextMode={voiceToTextMode}
          isRecording={isRecording}
          toggleRecording={toggleRecording}
          onSend={onSend}
          transcript={transcript}
          disabled={isLoading}
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
        disabled={isLoading}
      />
    );
  };

  useEffect(() => {
    if (messages && messagesEndRef?.current) {
      scrollToBottom(messagesEndRef?.current);
    }
  }, [messages]);

  return (
    <PageContainer>
      <Card>
        <Header m="24px" />
        <MessagesContainer ref={messagesEndRef}>
          {messages?.map((msg, index) => (
            <Message key={index} {...msg} />
          ))}
          {isLoading && <Message type={MSG_TYPE.SERVER} message="Typing..." />}
        </MessagesContainer>

        {!feedback && <InputContainer>{renderInput()}</InputContainer>}
      </Card>

      <FeedbackPanel
        feedback={feedback}
        onEnd={handleEndChat}
        onNewChat={handleNewChat}
      />
    </PageContainer>
  );
};

export default ChatPage;
