import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { IoCloudUploadSharp } from "react-icons/io5";

import { handleUploadFile } from "../../../../store/files/service";
import { Icon } from "../../../../styles/common";

import { UploaderContainer, UploadButton, HiddenInput, Info } from "./styles";

const FileUploader = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

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
      <Info>{"Please upload .pdf, .ppt, or .doc files smaller than 2MB."}</Info>
    </UploaderContainer>
  );
};

export default FileUploader;
