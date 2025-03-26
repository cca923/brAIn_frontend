import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoAddCircle } from "react-icons/io5";
import { toast } from "react-toastify";

import { scrollToTarget } from "../../../utils/scroll";
import { setSelectedFolderId } from "../../../store/folders/slice";
import { folderSelector } from "../../../store/selectors";
import {
  handleAddFolder,
  handleRemoveFolder,
} from "../../../store/folders/service";
import { Icon } from "../../../styles/common";

import {
  AddFolderButton,
  AddFolderInput,
  ButtonGroup,
  CancelButton,
  ConfirmButton,
  FoldersContainer,
} from "./styles";
import FolderItem from "./FolderItem";

const Folders = () => {
  const dispatch = useDispatch();
  const { folders, selectedFolderId } = useSelector(folderSelector);

  const [isAddingFolder, setIsAddingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const targetRef = useRef(null);
  const targetElement = targetRef?.current;

  const toggleAddingFolder = () => {
    setIsAddingFolder((prev) => !prev);
    setNewFolderName("");
  };

  const handleFolderClick = ({ id }) => {
    dispatch(setSelectedFolderId({ folderId: id }));
  };

  const handleFolderRemove = ({ id }) => {
    dispatch(handleRemoveFolder({ folderId: id }));
  };

  const handleConfirmAddFolder = () => {
    const folderName = newFolderName?.trim();
    if (!folderName) return;

    const folderExists = folders?.some((folder) => folder?.name === folderName);
    if (folderExists) {
      toast.error("Folder with the same name already exists!");
      return;
    }

    dispatch(handleAddFolder({ name: folderName }));
    setIsAddingFolder((prev) => !prev);
  };

  useEffect(() => {
    if (!targetElement) return;
    scrollToTarget(targetElement);
  }, [targetElement]);

  return (
    <FoldersContainer>
      <h2 className="title">Folders</h2>
      <div className="wrapper">
        {folders?.map((folder) => (
          <FolderItem
            key={folder.id}
            folderId={folder.id}
            selected={folder.id === selectedFolderId}
            name={folder.name}
            onClick={handleFolderClick}
            onRemove={handleFolderRemove}
            targetRef={targetRef}
          ></FolderItem>
        ))}
      </div>

      <div className="action-groups">
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
              <CancelButton onClick={toggleAddingFolder}>Cancel</CancelButton>
              <ConfirmButton onClick={handleConfirmAddFolder}>
                Confirm
              </ConfirmButton>
            </ButtonGroup>
          </AddFolderInput>
        ) : (
          <AddFolderButton onClick={toggleAddingFolder}>
            <Icon fontSize="20px" mr="5px">
              <IoAddCircle />
            </Icon>
            Add New Folder
          </AddFolderButton>
        )}
      </div>
    </FoldersContainer>
  );
};

export default Folders;
