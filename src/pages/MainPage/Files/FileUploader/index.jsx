import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoCloudUploadSharp } from "react-icons/io5";

import { handleUploadFile } from "../../../../store/files/service";
import { fileSelector } from "../../../../store/selectors";
import { Icon } from "../../../../styles/common";

import {
  UploaderContainer,
  UploadButton,
  HiddenInput,
  ErrorMessage,
} from "./styles";

const FileUploader = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { uploadError } = useSelector(fileSelector);

  const [isUploading, setIsUploading] = useState(false);

  const handleUploadClick = () => {
    if (!isUploading) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setIsUploading(true);

    try {
      await dispatch(handleUploadFile({ file })).unwrap();
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
      // Reset the file input
      e.target.value = null;
    }
  };

  return (
    <UploaderContainer>
      <UploadButton onClick={handleUploadClick} disabled={isUploading}>
        <Icon fontSize="20px">
          <IoCloudUploadSharp />
        </Icon>

        {isUploading ? "Uploading..." : "Upload New File"}
      </UploadButton>
      <HiddenInput
        type="file"
        ref={fileInputRef}
        accept=".pdf,.ppt,.pptx,.doc,.docx"
        onChange={handleFileChange}
        disabled={isUploading}
      />
      {uploadError && <ErrorMessage>{uploadError}</ErrorMessage>}
    </UploaderContainer>
  );
};

export default FileUploader;
