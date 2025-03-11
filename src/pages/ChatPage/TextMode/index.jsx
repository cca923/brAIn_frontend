import { TiMicrophoneOutline } from "react-icons/ti";
import { LuSend } from "react-icons/lu";

import { Icon } from "../../../styles/common";
import CommonButton from "../CommonButton";

import ChatTextarea from "./ChatTextarea";

const TextMode = ({
  textToVoiceMode,
  chatInputRef,
  inputMessage,
  onInputChange,
  onKeyPress,
  onSend,
  disabled,
}) => (
  <>
    <CommonButton
      onClick={textToVoiceMode}
      iconComponent={<TiMicrophoneOutline />}
    />

    <ChatTextarea
      chatInputRef={chatInputRef}
      inputMessage={inputMessage}
      onInputChange={onInputChange}
      onKeyPress={onKeyPress}
      disabled={disabled}
    />

    <CommonButton
      onClick={onSend}
      disabled={!inputMessage.trim()}
      iconComponent={<LuSend />}
    />
  </>
);

export default TextMode;
