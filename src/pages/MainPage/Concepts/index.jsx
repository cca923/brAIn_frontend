import { useSelector } from "react-redux";

import { folderSelector } from "../../../store/selectors";

import { ConceptsContainer } from "./styles";
import Item from "./Item";
import Empty from "./Empty";

const Concepts = () => {
  const { folders, selectedFolderId } = useSelector(folderSelector);
  const folder = folders?.find((data) => data?.id === selectedFolderId);
  const concepts = [...(folder?.concepts || [])].sort(
    (a, b) => a?.familiarity - b?.familiarity
  );

  return (
    <ConceptsContainer>
      <h2 className="title">Key Concepts</h2>
      <p className="description">
        Familiarity based on AI Quiz and AI Chat results, scored from 0 to 100%
      </p>
      <div className="wrapper">
        {concepts?.length === 0 && <Empty />}
        {concepts?.map((data, index) => (
          <Item key={index} {...data} />
        ))}
      </div>
    </ConceptsContainer>
  );
};
export default Concepts;
