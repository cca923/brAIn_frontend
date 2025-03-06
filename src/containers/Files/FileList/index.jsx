import { useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";

import { folderSelector, fileSelector } from "../../../store/selectors";
import { scrollToBottom } from "../../../utils/scroll";

import { FileListContainer, FileItem, NoFiles } from "./styles";

const FileList = () => {
  const { currentFolder } = useSelector(folderSelector);
  const { filesByFolder } = useSelector(fileSelector);
  const fileListRef = useRef(null);

  const files = useMemo(
    () => filesByFolder[currentFolder] || [],
    [filesByFolder, currentFolder]
  );

  useEffect(() => {
    if (files?.length === 0) return;
    scrollToBottom(fileListRef?.current);
  }, [files]);

  return (
    <FileListContainer ref={fileListRef}>
      {files.length > 0 ? (
        files.map((file) => <FileItem key={file.id}>{file.name}</FileItem>)
      ) : (
        <NoFiles>No files in this folder</NoFiles>
      )}
    </FileListContainer>
  );
};

export default FileList;
