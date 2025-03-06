import { FilesContainer } from "./styles";
import FileList from "./FileList";
import FileUploader from "./FileUploader";

const Files = () => {
  return (
    <FilesContainer>
      <FileList />
      <FileUploader />
    </FilesContainer>
  );
};

export default Files;
