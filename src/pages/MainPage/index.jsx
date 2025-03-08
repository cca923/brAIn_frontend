import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleLoadFolders } from "../../store/folders/service";
import { handleLoadFiles } from "../../store/files/service";
import { folderSelector } from "../../store/selectors";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Header from "../../containers/Header";

import { SidebarContainer } from "./styles";
import FolderList from "./FolderList";
import Files from "./Files";
import ActionButtons from "./ActionButtons";

function MainPage() {
  const dispatch = useDispatch();
  const { selectedFolderId } = useSelector(folderSelector);

  useEffect(() => {
    // Load folders "once" when component mounts
    if (!selectedFolderId) {
      dispatch(handleLoadFolders({ folderId: selectedFolderId }));
    }
  }, [dispatch, selectedFolderId]);

  useEffect(() => {
    // Load files when current folder changes
    if (selectedFolderId) {
      dispatch(handleLoadFiles());
    }
  }, [dispatch, selectedFolderId]);

  return (
    <Layout
      sidebar={
        <SidebarContainer>
          <FolderList />
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
