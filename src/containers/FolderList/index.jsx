import { useEffect, useState, useRef } from "react";
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
  FolderListContainer,
} from "./styles";
import FolderItem from "./FolderItem";

const FolderList = () => {
  const dispatch = useDispatch();
  const { folders, isAddingFolder } = useSelector(folderSelector);
  const [newFolderName, setNewFolderName] = useState("");
  const folderListRef = useRef(null); // Reference to the folder list container
  const prevFolderLength = useRef(folders.length); // Keep track of previous length of the folder list

  const handleFolderClick = ({ id }) => {
    dispatch(selectFolder(id));
  };

  const handleRemoveFolder = ({ id }) => {
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

  useEffect(() => {
    // Only scroll to the bottom if a new folder is added
    if (folders.length > prevFolderLength.current) {
      if (folderListRef.current) {
        folderListRef.current.scrollTo({
          top: folderListRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }
    prevFolderLength.current = folders.length;
  }, [folders]);

  return (
    <FolderListContainer>
      <h2 className="title">Folders</h2>
      <div className="wrapper" ref={folderListRef}>
        {folders?.map((folder) => (
          <FolderItem
            key={folder.id}
            folderId={folder.id}
            selected={folder.selected}
            name={folder.name}
            onClick={handleFolderClick}
            onRemove={handleRemoveFolder}
          ></FolderItem>
        ))}
      </div>

      {isAddingFolder ? (
        <AddFolderInput>
          <input
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
