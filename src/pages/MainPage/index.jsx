import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleLoadFolders } from "../../store/folders/service";
import { handleLoadFiles } from "../../store/files/service";
import { folderSelector, isPageLoadingSelector } from "../../store/selectors";
import Layout from "../../components/Layout";
import FolderList from "../../containers/FolderList";
import Header from "../../containers/Header";
import Files from "../../containers/Files";
import ActionButtons from "../../containers/ActionButtons";

import { LoadingOverlay, SidebarContainer } from "./styles";

function MainPage() {
  const dispatch = useDispatch();
  const { selectedFolderId } = useSelector(folderSelector);
  const isLoading = useSelector(isPageLoadingSelector);

  useEffect(() => {
    // Load folders when component mounts
    dispatch(handleLoadFolders());
  }, [dispatch]);

  useEffect(() => {
    // Load files when current folder changes
    if (selectedFolderId) {
      dispatch(handleLoadFiles({ folderId: selectedFolderId }));
    }
  }, [dispatch, selectedFolderId]);

  return (
    <>
      {isLoading && <LoadingOverlay>Loading...</LoadingOverlay>}
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
    </>
  );
}

export default MainPage;
