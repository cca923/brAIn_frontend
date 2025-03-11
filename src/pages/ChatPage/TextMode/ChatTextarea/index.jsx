import { useCallback, useEffect } from "react";

import { Textarea } from "./styles";

const ChatTextarea = ({
  chatInputRef,
  inputMessage,
  onInputChange,
  onKeyPress,
  disabled,
}) => {
  // Auto-resizing
  const adjustHeight = useCallback(() => {
    const textarea = chatInputRef?.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
    }
  }, [chatInputRef]);

  useEffect(() => {
    adjustHeight();
  }, [inputMessage, adjustHeight]);

  return (
    <Textarea
      ref={chatInputRef}
      value={inputMessage}
      rows={1}
      onInput={adjustHeight}
      onChange={onInputChange}
      onKeyPress={onKeyPress}
      placeholder="Type your message..."
      disabled={disabled}
    />
  );
};

export default ChatTextarea;
