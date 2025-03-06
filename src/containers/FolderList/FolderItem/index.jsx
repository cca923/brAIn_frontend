import { FolderItemContainer, FolderName, RemoveBtn } from "./styles";

const FolderItem = ({ folderId, selected, name, onClick, onRemove }) => {
  const handleItemClick = () => {
    onClick({ id: folderId });
  };

  const handleItemRemove = ({ e }) => {
    e.stopPropagation();
    onRemove({ id: folderId });
  };

  return (
    <FolderItemContainer selected={selected} onClick={handleItemClick}>
      <FolderName selected={selected}>{name}</FolderName>
      <RemoveBtn onClick={(e) => handleItemRemove({ e })}>×</RemoveBtn>
    </FolderItemContainer>
  );
};

export default FolderItem;
