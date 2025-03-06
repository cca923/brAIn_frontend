import { FileItemContainer, FileName, RemoveBtn } from "./styles";

const FileItem = ({ fileId, name, onClick, onRemove }) => {
  const handleItemClick = () => {
    onClick({ id: fileId });
  };

  const handleItemRemove = ({ e }) => {
    e.stopPropagation();
    onRemove({ id: fileId });
  };

  return (
    <FileItemContainer onClick={handleItemClick}>
      <FileName>{name}</FileName>
      <RemoveBtn onClick={(e) => handleItemRemove({ e })}>×</RemoveBtn>
    </FileItemContainer>
  );
};

export default FileItem;
