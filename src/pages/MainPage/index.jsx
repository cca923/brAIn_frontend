import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { handleLoadFolders } from "../../store/folders/service";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Header from "../../containers/Header";

import { SidebarContainer } from "./styles";
import FolderList from "./FolderList";
import Files from "./Files";
import ActionButtons from "./ActionButtons";

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load folders "once" when component mounts
    dispatch(handleLoadFolders());
  }, [dispatch]);

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
