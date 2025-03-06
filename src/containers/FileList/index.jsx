import { useSelector } from "react-redux";

import { folderSelector, fileSelector } from "../../store/selectors";

import { FilesContainer, FileItem, NoFiles } from "./styles";

const FileList = () => {
  const { currentFolder } = useSelector(folderSelector);
  const { filesByFolder } = useSelector(fileSelector);

  const files = filesByFolder[currentFolder] || [];

  return (
    <FilesContainer>
      {files.length > 0 ? (
        files.map((file) => <FileItem key={file.id}>{file.name}</FileItem>)
      ) : (
        <NoFiles>No files in this folder</NoFiles>
      )}
    </FilesContainer>
  );
};

export default FileList;
