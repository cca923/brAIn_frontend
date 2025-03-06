import { useSelector } from "react-redux";
import { folderSelector } from "../../store/selectors";

import { HeaderContainer, Title } from "./styles";

const Header = () => {
  const { folders, selectedFolderId } = useSelector(folderSelector);
  const selectedFolderIdName =
    folders.find((folder) => folder?.id === selectedFolderId)?.name || "";

  return (
    <HeaderContainer>
      <Title>{selectedFolderIdName}</Title>
    </HeaderContainer>
  );
};

export default Header;
