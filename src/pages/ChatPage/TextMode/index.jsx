import { TiMicrophoneOutline } from "react-icons/ti";
import { LuSend } from "react-icons/lu";

import { Icon } from "../../../styles/common";
import CommonButton from "../CommonButton";

import AutoResizingTextarea from "./ChatTextarea";

const TextMode = ({
  textToVoiceMode,
  chatInputRef,
  inputMessage,
  onInputChange,
  onKeyPress,
  onSend,
}) => (
  <>
    <CommonButton
      onClick={textToVoiceMode}
      iconComponent={<TiMicrophoneOutline />}
    />

    <AutoResizingTextarea
      chatInputRef={chatInputRef}
      inputMessage={inputMessage}
      onInputChange={onInputChange}
      onKeyPress={onKeyPress}
    />

    <CommonButton
      onClick={onSend}
      disabled={!inputMessage.trim()}
      iconComponent={<LuSend />}
    />
  </>
);

export default TextMode;
