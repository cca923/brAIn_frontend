import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloudUploadSharp } from "react-icons/io5";
import { toast } from "react-toastify";

import { handleUploadFile } from "../../../../store/files/service";
import { fileSelector } from "../../../../store/selectors";
import { Icon } from "../../../../styles/common";

import { UploaderContainer, UploadButton, HiddenInput, Info } from "./styles";

const FileUploader = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { loadingMap } = useSelector(fileSelector);
  const isUploading = loadingMap?.uploadFile;

  const handleUploadClick = () => {
    if (!isUploading) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      await dispatch(handleUploadFile({ file })).unwrap();
    } catch (error) {
      toast.error(`Upload failed: ${error}`);
    } finally {
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
