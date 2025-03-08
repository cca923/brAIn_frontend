import { FaStop, FaRecordVinyl } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { MdFiberManualRecord } from "react-icons/md";
import { BsKeyboard } from "react-icons/bs";

import { Icon } from "../../../styles/common";
import CommonButton from "../CommonButton";

import { RecordPrompt, RightButtonsContainer } from "./styles";

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
    : transcript || "Click the icon, then start speaking!";

  return (
    <>
      <CommonButton
        variant={isRecording ? "success" : "danger"}
        onClick={toggleRecording}
        iconComponent={isRecording ? <FaStop /> : <MdFiberManualRecord />}
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
