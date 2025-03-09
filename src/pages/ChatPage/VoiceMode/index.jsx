import { FaStop } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { BsRecordCircle, BsKeyboard } from "react-icons/bs";

import { Icon } from "../../../styles/common";
import CommonButton from "../CommonButton";

import { RecordButton, RecordPrompt, RightButtonsContainer } from "./styles";

const VoiceMode = ({
  voiceToTextMode,
  isRecording,
  toggleRecording,
  onSend,
  transcript,
}) => {
  const recordingPrompt = transcript || "Listening...";
  const displayPrompt = isRecording
    ? recordingPrompt
    : transcript || "Click the icon and start speaking!";

  return (
    <>
      <RecordButton
        variant={isRecording ? "danger" : "default"}
        onClick={toggleRecording}
        iconComponent={isRecording ? <FaStop /> : <BsRecordCircle />}
      />

      <RecordPrompt>{displayPrompt}</RecordPrompt>

      <RightButtonsContainer>
        <CommonButton
          onClick={voiceToTextMode}
          iconComponent={<BsKeyboard />}
        />

        {transcript && (
          <CommonButton onClick={onSend} iconComponent={<LuSend />} />
        )}
      </RightButtonsContainer>
    </>
  );
};

export default VoiceMode;
