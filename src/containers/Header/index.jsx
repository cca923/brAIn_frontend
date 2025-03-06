import { useSelector } from "react-redux";
import { folderSelector } from "../../store/selectors";

import { HeaderContainer, Title } from "./styles";

const Header = () => {
  const { folders, currentFolder } = useSelector(folderSelector);
  const currentFolderName =
    folders.find((folder) => folder?.id === currentFolder)?.name || "";

  return (
    <HeaderContainer>
      <Title>{currentFolderName}</Title>
    </HeaderContainer>
  );
};

export default Header;
