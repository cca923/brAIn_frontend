import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFolder,
  toggleAddFolder,
  addFolder,
  removeFolder,
} from "../../store/folder/slice";
import { folderSelector } from "../../store/selectors";
import {
  AddFolderButton,
  AddFolderInput,
  ButtonGroup,
  CancelButton,
  ConfirmButton,
  FolderItem,
  FolderListContainer,
  FolderName,
  Heading,
  Input,
  RemoveButton,
} from "./styles";

const FolderList = () => {
  const { folders, isAddingFolder } = useSelector(folderSelector);
  const dispatch = useDispatch();
  const [newFolderName, setNewFolderName] = useState("");

  const handleFolderClick = ({ id }) => {
    dispatch(selectFolder(id));
  };

  const handleRemoveFolder = ({ e, id }) => {
    e.stopPropagation();
    dispatch(removeFolder(id));
  };

  const handleAddFolderClick = () => {
    dispatch(toggleAddFolder());
    setNewFolderName("");
  };

  const handleConfirmAddFolder = () => {
    if (newFolderName.trim()) {
      dispatch(addFolder(newFolderName.trim()));
    }
  };

  return (
    <FolderListContainer>
      <Heading>Folders</Heading>

      {folders?.map((folder) => (
        <FolderItem
          key={folder.id}
          selected={folder.selected}
          onClick={() => handleFolderClick({ id: folder.id })}
        >
          <FolderName selected={folder.selected}>{folder.name}</FolderName>
          <RemoveButton
            onClick={(e) => handleRemoveFolder({ e, id: folder.id })}
          >
            ×
          </RemoveButton>
        </FolderItem>
      ))}

      {isAddingFolder ? (
        <AddFolderInput>
          <Input
            type="text"
            placeholder="Enter the folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            autoFocus
          />
          <ButtonGroup>
            <CancelButton onClick={handleAddFolderClick}>Cancel</CancelButton>
            <ConfirmButton onClick={handleConfirmAddFolder}>
              Confirm
            </ConfirmButton>
          </ButtonGroup>
        </AddFolderInput>
      ) : (
        <AddFolderButton onClick={handleAddFolderClick}>
          + Add New Folder
        </AddFolderButton>
      )}
    </FolderListContainer>
  );
};

export default FolderList;
