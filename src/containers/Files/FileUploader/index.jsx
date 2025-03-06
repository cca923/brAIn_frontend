import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { uploadFileAsync } from "../../../store/file/service";
import { folderSelector, fileSelector } from "../../../store/selectors";

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

  const { currentFolder } = useSelector(folderSelector);
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
      await dispatch(
        uploadFileAsync({ file, folderId: currentFolder })
      ).unwrap();
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
        <span>↑</span> {isUploading ? "Uploading..." : "Upload New File"}
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
