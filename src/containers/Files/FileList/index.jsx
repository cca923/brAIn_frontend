import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { folderSelector, fileSelector } from "../../../store/selectors";
import { handleRemoveFile } from "../../../store/files/service";

import { scrollToBottom } from "../../../utils/scroll";

import { FileListContainer, NoFiles } from "./styles";
import FileItem from "./FileItem";

const FileList = () => {
  const dispatch = useDispatch();
  const { selectedFolderId } = useSelector(folderSelector);
  const { files } = useSelector(fileSelector);
  const fileListRef = useRef(null);

  const handleFileRemove = ({ id }) => {
    dispatch(handleRemoveFile({ fileId: id, folderId: selectedFolderId }));
  };

  useEffect(() => {
    if (files?.length === 0) return;
    scrollToBottom(fileListRef?.current);
  }, [files]);

  return (
    <FileListContainer ref={fileListRef}>
      {files.length > 0 ? (
        files.map((file) => (
          <FileItem
            key={file.id}
            fileId={file.id}
            name={file.name}
            onRemove={handleFileRemove}
          />
        ))
      ) : (
        <NoFiles>No files in this folder</NoFiles>
      )}
    </FileListContainer>
  );
};

export default FileList;
