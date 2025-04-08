import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../components/Loading";
import Header from "../../containers/Header";
import { handleLoadFolders } from "../../store/folders/service";
import { handleLoadFiles } from "../../store/files/service";
import { folderSelector } from "../../store/selectors";

import { SidebarContainer } from "./styles";
import Layout from "./Layout";
import Folders from "./Folders";
import Files from "./Files";
import ActionButtons from "./ActionButtons";
import Concepts from "./Concepts";

function MainPage() {
  const dispatch = useDispatch();
  const { selectedFolderId } = useSelector(folderSelector);

  useEffect(() => {
    // Load folders "once" when component mounts
    if (!selectedFolderId) {
      dispatch(handleLoadFolders({ isInit: true }));
    }
  }, [dispatch, selectedFolderId]);

  useEffect(() => {
    // Load files when current folder id changed
    if (selectedFolderId) {
      dispatch(handleLoadFiles({ folderId: selectedFolderId }));
    }
  }, [dispatch, selectedFolderId]);

  return (
    <Layout
      leftSidebar={
        <SidebarContainer>
          <Folders />
        </SidebarContainer>
      }
      rightSidebar={
        <SidebarContainer>
          <Concepts />
        </SidebarContainer>
      }
    >
      <Header />
      <Files />
      <ActionButtons />
    </Layout>
  );
}

export default MainPage;
