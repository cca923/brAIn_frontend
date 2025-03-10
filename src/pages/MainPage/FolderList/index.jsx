import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoAddCircle } from "react-icons/io5";
import { toast } from "react-toastify";

import { scrollToTarget } from "../../../utils/scroll";
import {
  setSelectedFolderId,
  toggleAddFolder,
} from "../../../store/folders/slice";
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
  FolderListContainer,
} from "./styles";
import FolderItem from "./FolderItem";

const FolderList = () => {
  const dispatch = useDispatch();
  const { folders, selectedFolderId, isAddingFolder } =
    useSelector(folderSelector);
  const [newFolderName, setNewFolderName] = useState("");
  const targetRef = useRef(null);
  const targetElement = targetRef?.current;

  const handleFolderClick = ({ id }) => {
    dispatch(setSelectedFolderId({ folderId: id }));
  };

  const handleFolderRemove = ({ id }) => {
    dispatch(handleRemoveFolder({ folderId: id }));
  };

  const handleAddFolderClick = () => {
    dispatch(toggleAddFolder());
    setNewFolderName("");
  };

  const handleConfirmAddFolder = () => {
    const folderName = newFolderName.trim();
    if (folderName) {
      const folderExists = folders?.some(
        (folder) => folder.name.toLowerCase() === folderName.toLowerCase()
      );
      if (folderExists) {
        toast.error("Folder with the same name already exists!");
        return;
      }

      return dispatch(handleAddFolder({ name: folderName }));
    }
  };

  useEffect(() => {
    if (targetElement) {
      scrollToTarget(targetElement);
    }
  }, [targetElement]);

  return (
    <FolderListContainer>
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
          <Icon fontSize="20px" mr="5px">
            <IoAddCircle />
          </Icon>
          Add New Folder
        </AddFolderButton>
      )}
    </FolderListContainer>
  );
};

export default FolderList;
