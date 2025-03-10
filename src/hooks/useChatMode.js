import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { handleSendMessage } from "../store/chat/service";
import { setUserMessage } from "../store/chat/slice";

const useChatMode = () => {
  const dispatch = useDispatch();

  const chatInputRef = useRef(null);
  const recognitionRef = useRef(null);
  const ignoreResultsRef = useRef(false);

  const [inputMessage, setInputMessage] = useState("");
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");

  // Text mode
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  // Voice mode
  const startRecording = () => {
    setTranscript("");
    if (recognitionRef?.current) {
      try {
        recognitionRef?.current.start();
      } catch (error) {
        console.error("Failed to start recognition:", error);
      }
    } else {
      alert("Speech recognition is not supported in your browser.");
      setIsVoiceMode(false);
    }
  };

  const stopRecording = () => {
    if (recognitionRef?.current) {
      try {
        setIsRecording(false);
        // stop the recognition
        recognitionRef?.current.stop();
      } catch (error) {
        console.error("Failed to stop recognition:", error);
      }
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      setIsRecording(true);
      startRecording();
    }
  };

  // Text -> Voice
  const textToVoiceMode = () => {
    setIsVoiceMode(true);
    setInputMessage("");
    setTranscript("");
  };

  // Voice -> Text
  const voiceToTextMode = () => {
    setIsVoiceMode(false);
    stopRecording();
    if (transcript?.trim()) {
      setInputMessage(transcript);
    }
  };

  // Send Message
  const handleSend = () => {
    const messageToSend = isVoiceMode ? transcript.trim() : inputMessage.trim();
    if (!messageToSend) return;

    // Set the flag to ignore further results
    ignoreResultsRef.current = true;

    if (isRecording) {
      stopRecording();
    }
    dispatch(setUserMessage({ message: messageToSend }));
    dispatch(handleSendMessage({ message: messageToSend }));
    setInputMessage("");

    setTranscript("");

    // Reset the flag after a short delay
    setTimeout(() => {
      ignoreResultsRef.current = false;
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition && !recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        // Only update transcript if we're not ignoring results
        if (!ignoreResultsRef.current) {
          const current = event.resultIndex;
          const transcriptText = event.results[current][0].transcript;
          setTranscript(transcriptText);
        }
      };

      recognition.onend = () => {
        // Only restart if we're still supposed to be recording
        if (isRecording) {
          try {
            recognition.start();
          } catch (error) {
            console.error("Recognition failed to restart:", error);
          }
        }
      };

      recognitionRef.current = recognition;
    }
  }, [isRecording]);

  // Focus input when mode changes
  useEffect(() => {
    if (!isVoiceMode) {
      chatInputRef.current?.focus();
    }
  }, [isVoiceMode]);

  return {
    chatInputRef,
    inputMessage,
    isRecording,
    isVoiceMode,
    transcript,
    textToVoiceMode,
    voiceToTextMode,
    onInputChange: handleInputChange,
    toggleRecording,
    onSend: handleSend,
    onKeyPress: handleKeyPress,
  };
};

export default useChatMode;
