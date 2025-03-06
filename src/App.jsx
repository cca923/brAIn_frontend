import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFoldersAsync } from "./store/folder/service";
import { loadFilesForFolderAsync } from "./store/file/service";
import { folderSelector, fileSelector } from "./store/selectors";
import { LoadingOverlay, SidebarContainer } from "./styles/styles";
import Layout from "./components/Layout";
import FolderList from "./containers/FolderList";
import Header from "./containers/Header";
import FileList from "./containers/FileList";
import FileUploader from "./containers/FileUploader";
import ActionButtons from "./containers/ActionButtons";

function App() {
  const dispatch = useDispatch();
  const { loading: foldersLoading, currentFolder } =
    useSelector(folderSelector);
  const { loading: filesLoading } = useSelector(fileSelector);

  useEffect(() => {
    // Load folders when component mounts
    dispatch(loadFoldersAsync());
  }, [dispatch]);

  useEffect(() => {
    // Load files when current folder changes
    if (currentFolder) {
      dispatch(loadFilesForFolderAsync(currentFolder));
    }
  }, [dispatch, currentFolder]);

  const isLoading = foldersLoading || filesLoading;

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
        <FileList />
        <FileUploader />
        <ActionButtons />
      </Layout>
    </>
  );
}

export default App;
