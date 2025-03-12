import { FileItemContainer, FileName, RemoveBtn } from "./styles";

const FileItem = ({ fileId, name, onRemove }) => {
  const handleItemRemove = ({ e }) => {
    e.stopPropagation();
    onRemove?.({ id: fileId });
  };

  return (
    <FileItemContainer>
      <FileName>{name}</FileName>
      <RemoveBtn onClick={(e) => handleItemRemove({ e })}>×</RemoveBtn>
    </FileItemContainer>
  );
};

export default FileItem;
